import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Form, Field } from "react-final-form";

import WithContacts from "../hoc/WithContacts";

import Loader from "../components/Loader";
import FormTextField from "../components/FormTextField";
import { composeValidators, isRequired, isEmail, isUrl } from "../utils/validators";
import Colors from "../constants/Colors";

const defaultInitialValues = {
  name: "",
  email: "",
  imgUrl: ""
};

class ContactScreen extends Component {
  handleSaveContact = contact => {
    console.log("handleSaveContact: ", contact);
  };

  render() {
    return this.props.isLoading ? (
      <Loader />
    ) : (
      <View style={styles.container}>
        <Form
          initialValues={defaultInitialValues}
          onSubmit={this.handleSaveContact}
          render={({ handleSubmit, invalid, pristine, form, submitting }) => (
            <View style={styles.container}>
              <Field
                name="name"
                component={FormTextField}
                label="Name"
                placeholder="name"
                validate={isRequired}
              />
              <Field
                name="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                component={FormTextField}
                label="Email"
                placeholder="email"
                validate={composeValidators(isRequired, isEmail)}
                autoCapitalize="none"
              />
              <Field
                name="imgUrl"
                textContentType="URL"
                keyboardType="url"
                component={FormTextField}
                label="Image url"
                placeholder="image url"
                validate={isUrl}
                autoCapitalize="none"
              />
              <View style={styles.buttonsContainer}>
                <Button
                  color={Colors.success}
                  disabled={submitting || invalid || pristine}
                  onPress={handleSubmit}
                  title="Save"
                />
                <Button
                  color={Colors.error}
                  disabled={submitting || pristine}
                  onPress={form.reset}
                  title="Reset"
                />
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8
  },
  buttonsContainer: {
    flexDirection: "row"
  }
});

export default WithContacts(ContactScreen);

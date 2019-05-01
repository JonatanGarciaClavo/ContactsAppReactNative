import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Form, Field } from "react-final-form";

import FormTextField from "../components/FormTextField";
import { composeValidators, isRequired, isEmail, isUrl } from "../utils/validators";
import WithContacts from "../hoc/WithContacts";

const defaultInitialValues = {
  name: "",
  email: "",
  imgUrl: ""
};

class ContactScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("id") ? "Edit" : "Create"
    };
  };

  render() {
    const id = this.props.navigation.getParam("id");
    const initialValues = id
      ? this.props.getContactById(id) || defaultInitialValues
      : defaultInitialValues;
    return (
      <View style={styles.container}>
        <Form
          initialValues={initialValues}
          onSubmit={contact => {
            this.props.saveContact(contact);
            this.props.navigation.navigate("Home");
          }}
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
                component={FormTextField}
                label="Email"
                placeholder="email"
                validate={composeValidators(isRequired, isEmail)}
              />
              <Field
                name="imgUrl"
                textContentType="URL"
                component={FormTextField}
                label="Image url"
                placeholder="image url"
                validate={isUrl}
              />
              <View style={styles.buttonsContainer}>
                <Button
                  disabled={submitting || invalid || pristine}
                  onPress={handleSubmit}
                  title="Save"
                />
                <Button disabled={submitting || pristine} onPress={form.reset} title="Reset" />
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

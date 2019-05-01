import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const FormTextField = ({ input, meta, label, ...others }) => (
  <View style={styles.container}>
    <Text style={meta.error && meta.touched ? [styles.label, styles.error] : styles.label}>
      {label}
    </Text>
    <TextInput {...input} {...others} />
    {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 8
  },
  label: {
    color: "black"
  },
  error: {
    color: "red"
  }
});

export default FormTextField;

import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const ContactList = () => (
  <ScrollView style={styles.container}>
    <Text>ContactList</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default ContactList;

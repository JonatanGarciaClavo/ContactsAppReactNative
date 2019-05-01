import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts, onContactClick, onDeleteClick }) => (
  <ScrollView style={styles.container}>
    {contacts.map(contact => (
      <ContactListItem
        key={contact.id}
        onClick={onContactClick}
        onDeleteClick={onDeleteClick}
        {...contact}
      />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default ContactList;

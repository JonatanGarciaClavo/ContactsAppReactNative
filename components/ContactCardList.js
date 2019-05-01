import React from "react";
import { ScrollView } from "react-native";

import ContactCardListItem from "./ContactCardListItem";

const ContactCardList = ({ contacts, onContactClick, onDeleteClick }) => (
  <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
    {contacts.map(contact => (
      <ContactCardListItem
        key={contact.id}
        onClick={onContactClick}
        onDeleteClick={onDeleteClick}
        {...contact}
      />
    ))}
  </ScrollView>
);

export default ContactCardList;

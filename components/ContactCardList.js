import React from "react";
import { ScrollView } from "react-native";

import ContactCardListItem from "./ContactCardListItem";

const ContactCardList = ({ contacts, onContactClick }) => (
  <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
    {contacts.map(contact => (
      <ContactCardListItem key={contact.id} onClick={onContactClick} {...contact} />
    ))}
  </ScrollView>
);

export default ContactCardList;

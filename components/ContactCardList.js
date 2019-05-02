import React from "react";
import { ScrollView } from "react-native";

import ContactCardItem from "./ContactCardItem";

const ContactCardList = ({ contacts, ...others }) => (
  <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
    {contacts.map(contact => (
      <ContactCardItem key={contact.id} contact={contact} {...others} />
    ))}
  </ScrollView>
);

export default ContactCardList;

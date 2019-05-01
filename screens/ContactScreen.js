import React, { Component } from "react";
import { Text } from "react-native";

import WithContacts from "../hoc/WithContacts";

class ContactScreen extends Component {
  render() {
    return <Text>ContactScreen</Text>;
  }
}

export default WithContacts(ContactScreen);

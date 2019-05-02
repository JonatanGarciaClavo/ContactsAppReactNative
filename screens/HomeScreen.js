import React from "react";
import { StyleSheet, View } from "react-native";

import WithContacts from "../hoc/WithContacts";

import Loader from "../components/Loader";
import ContactList from "../components/ContactList";
import ContactCardList from "../components/ContactCardList";
import SwitchList from "../components/SwitchList";

import { contacts } from "../constants/contacts";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListMode: true
    };
  }
  static navigationOptions = {
    title: "Home"
  };

  handleContactClick = contact => {
    console.log("handleContactClick: ", contact);
  };
  handleDeleteClick = contact => {
    console.log("handleDeleteClick: ", contact);
  };

  render() {
    const { isLoading } = this.props;
    const { isListMode } = this.state;
    return (
      <View style={styles.container}>
        <SwitchList
          isSelected={isListMode}
          onToggle={newIsListMode => {
            this.setState({
              isListMode: newIsListMode
            });
          }}
        />
        {isLoading ? (
          <Loader />
        ) : isListMode ? (
          <ContactList />
        ) : (
          <ContactCardList
            contacts={contacts}
            onContactClick={this.handleContactClick}
            onDeleteClick={this.handleDeleteClick}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default WithContacts(HomeScreen);

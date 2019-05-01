import React from "react";
import { StyleSheet, View } from "react-native";

import WithContacts from "../hoc/WithContacts";

import Loader from "../components/Loader";
import ContactList from "../components/ContactList";
import ContactCardList from "../components/ContactCardList";
import SwitchList from "../components/SwitchList";

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

  componentDidMount() {
    this.props.fetchContacts();
  }

  handleContactClick = id => {
    console.log("handleContactClick: ", id);
  };

  handleDeleteClick = id => {
    console.log("handleDeleteClick: ", id);
  };

  render() {
    const { isLoading, getContacts } = this.props;
    const { isListMode } = this.state;
    const contacts = getContacts();
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
          <ContactList
            contacts={contacts}
            onContactClick={this.handleContactClick}
            onDeleteClick={this.handleDeleteClick}
          />
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

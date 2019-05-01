import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import DeleteIcon from "./DeleteIcon";

const ContactListItem = ({ id, imgUrl, name, email, onClick, onDeleteClick }) => (
  <TouchableOpacity
    onPress={() => {
      onClick(id);
    }}
  >
    <View style={styles.rowContainer}>
      <Image
        source={imgUrl ? { uri: imgUrl } : require("../assets/images/robot-prod.png")}
        style={styles.contactImg}
      />
      <View style={styles.contactInfoContainer}>
        <Text>{name}</Text>
        <Text>{email}</Text>
      </View>
      <DeleteIcon onPress={() => onDeleteClick(id)} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1
  },
  contactImg: {
    width: 40,
    height: 40,
    borderRadius: 5
  },
  contactInfoContainer: {
    flex: 1,
    padding: 8
  }
});

export default ContactListItem;

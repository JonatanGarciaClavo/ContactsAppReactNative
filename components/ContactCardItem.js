import React from "react";

import { StyleSheet, View, Image, TouchableOpacity, Dimensions, Text } from "react-native";

import DeleteIcon from "./DeleteIcon";

const { width } = Dimensions.get("window");

const ContactCardItem = ({ contact, onContactClick, onDeleteClick }) => (
  <TouchableOpacity
    onPress={() => {
      onContactClick(contact);
    }}
  >
    <View style={styles.cardContainer}>
      <View style={styles.deleteIconContainer}>
        <DeleteIcon
          onPress={() => {
            onDeleteClick(contact);
          }}
        />
      </View>
      <View style={styles.cardImgContainer}>
        <Image
          style={styles.cardImg}
          source={
            contact.imgUrl ? { uri: contact.imgUrl } : require("../assets/images/robot-prod.png")
          }
        />
      </View>
      <View>
        <Text>{contact.name}</Text>
        <Text>{contact.email}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cardContainer: {
    width: width - 16,
    padding: 8,
    margin: 8,
    borderWidth: 1,
    borderRadius: 20
  },
  deleteIconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  cardImgContainer: {
    alignItems: "center"
  },
  cardImg: {
    width: width - 32,
    height: (width - 32) * 0.8,
    borderRadius: 10
  }
});

export default ContactCardItem;

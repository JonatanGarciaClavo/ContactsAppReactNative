import React from "react";
import { Image, StyleSheet, Text, Dimensions, View, TouchableOpacity } from "react-native";
import DeleteIcon from "./DeleteIcon";

const { width } = Dimensions.get("window");

const ContactCardListItem = ({ id, imgUrl, name, email, onClick, onDeleteClick }) => (
  <TouchableOpacity
    onPress={() => {
      onClick(id);
    }}
  >
    <View style={styles.cardContainer}>
      <View style={styles.deleteIconContainer}>
        <DeleteIcon onPress={() => onDeleteClick(id)} />
      </View>
      <View style={styles.cardImgContainer}>
        <Image
          source={imgUrl ? { uri: imgUrl } : require("../assets/images/robot-prod.png")}
          style={styles.cardImg}
        />
      </View>
      <View style={styles.contactInfoContainer}>
        <Text>{name}</Text>
        <Text>{email}</Text>
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

export default ContactCardListItem;

import React from "react";
import { StyleSheet, View, Switch, Text } from "react-native";
import Colors from "../constants/Colors";

const SwitchList = ({ isSelected, onToggle }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Card list</Text>
    <Switch
      ios_backgroundColor={Colors.switchBackground}
      value={isSelected}
      onValueChange={onToggle}
    />
    <Text style={styles.text}>List</Text>
  </View>
);

export default SwitchList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 8
  },
  text: {
    padding: 8
  }
});

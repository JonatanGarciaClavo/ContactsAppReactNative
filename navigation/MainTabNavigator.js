import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ContactScreen from "../screens/ContactScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../constants/Colors";

const tabBarOptions = {
  activeTintColor: Colors.tabLabelActive,
  inactiveTintColor: Colors.tabLabelInactive
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Contact: ContactScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? `ios-list` : "md-list"} />
  ),
  tabBarOptions
};

const ContactStack = createStackNavigator({
  Contact: ContactScreen
});

ContactStack.navigationOptions = {
  tabBarLabel: "Add contact",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-contact" : "md-contact"} />
  ),
  tabBarOptions
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-options" : "md-options"} />
  ),
  tabBarOptions
};

export default createBottomTabNavigator({
  HomeStack,
  ContactStack,
  SettingsStack
});

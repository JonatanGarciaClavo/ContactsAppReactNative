import React from "react";
import { Icon } from "expo";
import Colors from "../constants/Colors";

const DeleteIcon = props => (
  <Icon.MaterialIcons {...props} name="delete" size={26} color={Colors.error} />
);

export default DeleteIcon;

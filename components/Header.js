/* COMPONENT: Used for the top of the program. It will be consistently used
throughout the entire program.  */

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from '../constants/colors';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontFamily: "open-sans-bold",
    color: "black",
    fontSize: 18,
  },
});
export default Header;

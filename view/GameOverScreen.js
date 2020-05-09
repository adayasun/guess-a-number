import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import DefaultStyle from "../constants/default-styles";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyle.title}>The game is over!!</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={100}
          source={require("../assets/success.png")}
          //source={{
          //  uri:
          //    "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
          //}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={DefaultStyle.bodyText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text>
        </Text>
      </View>
      <MainButton onClick={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
});

export default GameOverScreen;

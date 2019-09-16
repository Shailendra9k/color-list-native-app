import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const ColorButton = ({ backgroundColor, onSelect = f => f }) => (
  <TouchableHighlight
    style={styles.button}
    onPress={() => onSelect(backgroundColor)}
    underlayColor="#ff4757"
  >
    <View style={styles.row}>
      <View style={[styles.sample, { backgroundColor }]} />
      <Text style={styles.text}>{backgroundColor}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    backgroundColor: "#747d8c"
  },

  row: {
    flexDirection: "row",
    alignItems: "center"
  },

  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "#dfe4ea"
  },

  text: {
    fontSize: 30,
    margin: 5,
    flexDirection: "row"
  }
});
export default ColorButton;

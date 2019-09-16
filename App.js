import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

export default class ColorList extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "#eb4d4b"
    };
  }
  render() {
    const { backgroundColor } = this.state;
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor
          }
        ]}
      ></View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0984e3",
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  }
});

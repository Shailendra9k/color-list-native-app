import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

export default class ColorList extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "#eb4d4b"
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(backgroundColor) {
    this.setState({ backgroundColor });
  }
  render() {
    const { backgroundColor } = this.state;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <View style={styles.row}>
          <View style={styles.sample}>
            <Text>Yellow</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0984e3",
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    textAlign: "center"
  }
});

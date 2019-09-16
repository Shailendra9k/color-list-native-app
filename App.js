import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export default class ColorList extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "#7bed9f"
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
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.changeColor("#eccc68")}
          underlayColor="#ff4757"
        >
          <View style={styles.row}>
            <View style={[styles.sample, { backgroundColor: "#eccc68" }]} />
            <Text style={styles.text}>Yellow</Text>
          </View>
        </TouchableHighlight>
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

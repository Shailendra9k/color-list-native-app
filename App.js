import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ColorButton from "./components/colorButton";

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
      <ScrollView style={[styles.container, { backgroundColor }]}>
        <ColorButton backgroundColor="red" onSelect={this.changeColor} />
        <ColorButton backgroundColor="blue" onSelect={this.changeColor} />
        <ColorButton backgroundColor="green" onSelect={this.changeColor} />
        <ColorButton backgroundColor="salmon" onSelect={this.changeColor} />
        <ColorButton
          backgroundColor="rgb(255,0,255)"
          onSelect={this.changeColor}
        />
        <ColorButton backgroundColor="#00FF00" onSelect={this.changeColor} />
        <ColorButton backgroundColor="red" onSelect={this.changeColor} />
        <ColorButton backgroundColor="blue" onSelect={this.changeColor} />
        <ColorButton backgroundColor="green" onSelect={this.changeColor} />
        <ColorButton backgroundColor="salmon" onSelect={this.changeColor} />
        <ColorButton
          backgroundColor="rgb(255,0,255)"
          onSelect={this.changeColor}
        />
        <ColorButton backgroundColor="#00FF00" onSelect={this.changeColor} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});

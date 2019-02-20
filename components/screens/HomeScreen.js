import React, { Component } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import SimpleButton from "../interface/buttons/SimpleButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  sectionOne: {
    width: 500,
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center"
  },
  sectionTwo: {
    width: 500,
    flex: 1,
    backgroundColor: "lightyellow",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionOne}>
          <SimpleButton
            iconName={Platform.OS === "ios" ? "ios-search" : "md-search"}
            title="Go Digging"
            type="solid"
            click={() => this.props.navigation.navigate("Search")}
          />
        </View>
        <View style={styles.sectionTwo}>
          <SimpleButton
            iconName={Platform.OS === "ios" ? "ios-videocam" : "md-videocam"}
            title="My Watch List"
            type="solid"
            click={() =>
              console.log(this.props.navigation.navigate("Favorites"))
            }
          />
        </View>
      </View>
    );
  }
}

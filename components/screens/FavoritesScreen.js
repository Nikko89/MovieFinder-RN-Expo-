import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

class FavoritesScreen extends Component {
  render() {
    const { favoriteList } = this.props;
    if (!favoriteList) {
      return (
        <View style={styles.container}>
          <Text> No Favorite movies yet. Let's look up some! </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text> GOT FAVORITES </Text>
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  favoriteList: state.favoriteList
});

const mapDispatchToProps = dispatch => ({
  removeFromFavorites: id => dispatch(removeFromFavorites(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesScreen);

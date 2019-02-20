import React, { Component } from "react";
import { Text, View } from "react-native";
import AppNavigator from "../../navigation/AppNavigator";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../../redux/reducers";

const store = createStore(reducers);

export default class Main extends Component {
  render() {
    console.log(store);
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

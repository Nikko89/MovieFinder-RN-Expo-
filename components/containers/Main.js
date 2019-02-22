/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppNavigator from '../../navigation/AppNavigator';
import reducers from '../../redux/reducers';

const store = createStore(reducers);

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

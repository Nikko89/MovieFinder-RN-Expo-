/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { AppLoading, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import Main from './components/containers/Main';
import SpaceMonoFont from './assets/fonts/SpaceMono-Regular.ttf';
import reducers from './redux/reducers';
import { loadState, saveState } from './storage/secureStore';

const persistedState = loadState();
const store = createStore(reducers, persistedState, applyMiddleware(logger));

store.subscribe(() => {
  saveState({
    favoriteList: store.getState().favoriteList,
  });
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = async () => Promise.all([
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      'space-mono': SpaceMonoFont,
    }),
  ]);

  handleLoadingError = (error) => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading startAsync={this.loadResourcesAsync} onFinish={this.handleFinishLoading} />
      );
    }
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

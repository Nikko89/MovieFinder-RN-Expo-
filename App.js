/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { AppLoading, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import Main from './components/containers/Main';
import SpaceMonoFont from './assets/fonts/SpaceMono-Regular.ttf';
import reducers from './redux/reducers';
import { loadState, saveState } from './storage/asyncStorage';

const persistedState = loadState();
console.log(persistedState);
const store = createStore(reducers, applyMiddleware(logger));

store.subscribe(() => {
  saveState({
    movieList: store.getState().movieList,
    favoriteList: store.getState().favoriteList,
    genreList: store.getState().genreList,
    searchQuery: store.getState().searchQuery,
  });
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = async () => Promise.all([
    Font.loadAsync({
      ...Icon.Ionicons.font,
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

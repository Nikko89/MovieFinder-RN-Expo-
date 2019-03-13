/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { AppLoading, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { View, StyleSheet } from 'react-native';
import Main from './components/containers/Main';
import SpaceMonoFont from './assets/fonts/SpaceMono-Regular.ttf';
import { store, persistor } from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class App extends React.Component {
  loadResourcesAsync = async () => Promise.all([
    Font.loadAsync({
      ...Icon.Ionicons.font,
      'space-mono': SpaceMonoFont,
    }),
  ]);

  renderLoading = () => (
    <View style={styles.container}>
      <AppLoading />
    </View>
  );

  handleLoadingError = (error) => {
    console.warn(error);
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}

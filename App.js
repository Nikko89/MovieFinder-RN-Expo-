/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Font, Icon } from 'expo';
import Main from './components/containers/Main';
import SpaceMonoFont from './assets/fonts/SpaceMono-Regular.ttf';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
    if (isLoadingComplete) {
      return (
        <AppLoading startAsync={this.loadResourcesAsync} onFinish={this.handleFinishLoading} />
      );
    }
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

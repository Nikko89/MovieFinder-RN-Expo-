/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import propTypes from 'prop-types';
import SimpleButton from '../interface/buttons/SimpleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionOne: {
    width: 500,
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTwo: {
    width: 500,
    flex: 1,
    backgroundColor: 'lightyellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.sectionOne}>
          <SimpleButton
            iconName="search"
            title="Go Digging"
            type="solid"
            click={() => navigation.navigate('Search')}
            style={{ width: 200 }}
          />
        </View>
        <View style={styles.sectionTwo}>
          <SimpleButton
            iconName="videocam"
            title="My Watch List"
            type="solid"
            click={() => navigation.navigate('Favorites')}
            style={{ width: 200 }}
          />
        </View>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;

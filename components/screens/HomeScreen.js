/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, StyleSheet } from 'react-native';
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

const HomeScreen = props => (
  <View style={styles.container}>
    <View style={styles.sectionOne}>
      <SimpleButton
        iconName="search"
        title="Go Digging"
        type="solid"
        click={() => props.navigation.navigate('Search')}
        style={{ width: 200 }}
      />
    </View>
    <View style={styles.sectionTwo}>
      <SimpleButton
        iconName="videocam"
        title="My Watch List"
        type="solid"
        click={() => props.navigation.navigate('Favorites')}
        style={{ width: 200 }}
      />
    </View>
  </View>
);

HomeScreen.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;

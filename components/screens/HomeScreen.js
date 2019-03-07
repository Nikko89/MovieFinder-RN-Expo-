/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Text } from 'react-native-elements';
import propTypes from 'prop-types';
import SimpleButton from '../interface/buttons/SimpleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 75,
  },
  buttonList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  intro: {
    marginVertical: 10,
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
        <View style={styles.intro}>
          <Text h2 style={{ textTransform: 'uppercase', letterSpacing: 1 }}>
            Movie Find
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              padding: 20,
              textAlign: 'center',
            }}
          >
            Easily look up movies and build your watchlist!
          </Text>
        </View>
        <View style={styles.buttonList}>
          <SimpleButton
            iconName="search"
            iconSize={50}
            color="white"
            title=""
            type="solid"
            click={() => navigation.navigate('Search')}
            style={{
              borderRadius: 50,
              margin: 20,
              width: 80,
              height: 80,
            }}
          />
          <SimpleButton
            iconName="star"
            iconSize={50}
            color="white"
            title=""
            type="solid"
            click={() => navigation.navigate('Favorites')}
            style={{
              borderRadius: 50,
              margin: 20,
              width: 80,
              height: 80,
            }}
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

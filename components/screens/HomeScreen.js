/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text } from 'react-native-elements';
import propTypes from 'prop-types';
import { LinearGradient } from 'expo';
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
  buttonView: {
    alignItems: 'center',
    flex: 1,
  },
  outButtonText: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
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
      <LinearGradient
        colors={['lightgreen', '#F8D353', '#FF5C5A', 'blue']}
        start={[0, 0.5]}
        end={[1, 1]}
        style={{ flex: 1 }}
      >
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
            <View style={styles.buttonView}>
              <SimpleButton
                iconName="search"
                iconSize={50}
                color={Platform.OS === 'ios' ? 'white' : 'blue'}
                title=""
                type="solid"
                click={() => navigation.navigate('Search')}
                style={{
                  borderRadius: 50,
                  margin: 20,
                  width: 80,
                  height: 80,
                  borderColor: 'white',
                  borderWidth: 2,
                }}
              />
              <Text>Search</Text>
            </View>
            <View style={styles.buttonView}>
              <SimpleButton
                iconName="star"
                iconSize={50}
                color={Platform.OS === 'ios' ? 'white' : 'blue'}
                title=""
                type="solid"
                click={() => navigation.navigate('Favorites')}
                style={{
                  borderRadius: 50,
                  margin: 20,
                  width: 80,
                  height: 80,
                  borderColor: 'white',
                  borderWidth: 2,
                }}
              />
              <Text>Favorites</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

HomeScreen.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;

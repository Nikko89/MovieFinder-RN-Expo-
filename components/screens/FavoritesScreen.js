/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import propTypes from 'prop-types';
import MovieList from '../interface/list_views/MovieList';
import SimpleButton from '../interface/buttons/SimpleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'My Favorite List',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const { favoriteList, navigation } = this.props;
    if (favoriteList.length === 0) {
      return (
        <LinearGradient colors={['#59E098', '#5BE5FF']} style={styles.container}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              padding: 20,
              textAlign: 'center',
            }}
          >
            No Favorite movies yet. Add up some first!
          </Text>
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
              borderColor: 'white',
              borderWidth: 2,
            }}
          />
        </LinearGradient>
      );
    }

    return (
      <View>
        <MovieList list={favoriteList} />
      </View>
    );
  }
}

FavoritesScreen.propTypes = {
  favoriteList: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
  navigation: propTypes.shape({
    navigate: propTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  favoriteList: state.favoriteList,
});

export default connect(mapStateToProps)(FavoritesScreen);

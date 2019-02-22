/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Text, View, StyleSheet, SimpleButton, Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { removeFromFavorites } from '../../redux/actions';
import MovieList from '../interface/list_views/MovieList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const FavoritesScreen = (props) => {
  const { favoriteList, navigation } = props;
  if (!favoriteList) {
    return (
      <View style={styles.container}>
        <Text>
          No Favorite movies yet. Add up some first!
          <SimpleButton
            title="Search some"
            iconName={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
            type="outline"
            click={() => navigation.navigate('SearchScreen')}
          />
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MovieList list={favoriteList} />
    </View>
  );
};

/* FavoritesScreen.propTypes = {
  favoriteList: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
  navigation: propTypes.shape({
    navigate: propTypes.func.isRequired,
  }).isRequired,
}; */

const mapStateToProps = state => ({
  favoriteList: state.favoriteList,
});

const mapDispatchToProps = dispatch => ({
  removeFromFavorites: id => dispatch(removeFromFavorites(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesScreen);

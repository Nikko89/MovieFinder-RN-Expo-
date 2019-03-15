/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import SearchForm from '../interface/forms/SearchForm';
import MovieList from '../interface/list_views/MovieList';
import {
  updateSearchQuery,
  genreSearch,
  dateSearch,
  genreAndDateSearch,
  fetchMovieList,
} from '../../redux/actions';

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search & Display',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const { movieList } = this.props;
    return (
      <View>
        <SearchForm {...this.props} />
        {movieList.length ? (
          <MovieList list={movieList} />
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
              padding: 20,
            }}
          >
            <Text h3 style={{ textAlign: 'center' }}>
              No movies for this query!
            </Text>
            <Text h4 style={{ textAlign: 'center' }}>
              Please try a different keyword, or use filters.
            </Text>
          </View>
        )}
      </View>
    );
  }
}

SearchScreen.propTypes = {
  movieList: propTypes.arrayOf(propTypes.shape()).isRequired,
};

const mapStateToProps = state => ({
  genreList: state.genreList,
  searchQuery: state.searchQuery,
  movieList: state.movieList,
});

const mapDispatchToProps = dispatch => ({
  updateSearchQuery: query => dispatch(updateSearchQuery(query)),
  genreSearch: genreId => dispatch(genreSearch(genreId)),
  dateSearch: year => dispatch(dateSearch(year)),
  genreAndDateSearch: (year, genreId) => dispatch(genreAndDateSearch(year, genreId)),
  fetchMovieList: list => dispatch(fetchMovieList(list)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchScreen);

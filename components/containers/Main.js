/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Constants } from 'expo';
import propTypes from 'prop-types';
import AppNavigator from '../../navigation/AppNavigator';
import { fetchGenreList, updateMovieList } from '../../redux/actions';

const apiKey = Constants.manifest.extra.API_KEY;

class Main extends Component {
  componentDidMount() {
    const { genreList } = this.props;
    if (!genreList.length) {
      this.fetchGenres();
    }
    this.fetchMovieList();
  }

  componentDidUpdate(prevProps) {
    const { searchQuery } = this.props;
    if (searchQuery !== prevProps.searchQuery) {
      this.fetchMovieList();
    }
  }

  fetchGenres = () => {
    const { updateGenreList } = this.props;
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US
    `)
      .then(this.handleErrors)
      .then(res => res.json())
      .then(res => updateGenreList(res));
  };

  fetchMovieList = () => {
    const { searchQuery, updateMovieList } = this.props;
    fetch(searchQuery)
      .then(this.handleErrors)
      .then(res => res.json())
      .then(res => updateMovieList(res.results));
  };

  handleErrors = (response) => {
    if (!response.ok) {
      console.log('RESPONSE PROBLEM', response);
    }
    return response;
  };

  render() {
    return <AppNavigator />;
  }
}

Main.propTypes = {
  genreList: propTypes.arrayOf(propTypes.shape()).isRequired,
  searchQuery: propTypes.string.isRequired,
  updateGenreList: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchQuery: state.searchQuery,
  genreList: state.genreList,
  movieList: state.movieList,
});

const mapDispatchToProps = dispatch => ({
  updateGenreList: query => dispatch(fetchGenreList(query)),
  updateMovieList: list => dispatch(updateMovieList(list)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

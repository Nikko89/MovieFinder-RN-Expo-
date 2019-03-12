/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Text from 'react-native';
import { propTypes } from 'prop-types';
import MovieList from './MovieList';

export default class SearchView extends Component {
  render() {
    const { list } = this.props;
    if (list) {
      return <MovieList list={list} />;
    }
    return <Text>No Movies here yet!</Text>;
  }
}

SearchView.propTypes = {
  list: propTypes.arrayOf(propTypes.shape()).isRequired,
};

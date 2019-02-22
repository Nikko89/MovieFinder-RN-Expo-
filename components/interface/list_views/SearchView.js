/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Text from 'react-native';
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

/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FlatList } from 'react-native';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';

class MovieList extends React.Component {
  keyExtractor = item => item.id.toString();

  renderItem = ({ item }) => <MovieItem movie={item} />;

  render() {
    const { list, favoriteList } = this.props;
    return (
      <FlatList
        data={list}
        favorites={favoriteList}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

MovieList.propTypes = {
  list: propTypes.arrayOf(propTypes.shape()).isRequired,
};

const mapStateToProps = state => ({
  favoriteList: state.favoriteList,
});

export default connect(mapStateToProps)(MovieList);

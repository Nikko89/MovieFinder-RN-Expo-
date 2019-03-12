/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import { removeFromFavorites, addToFavorites } from '../../../redux/actions';

class MovieList extends React.Component {
  keyExtractor = item => item.id.toString();

  renderItem = ({ item }) => (
    <MovieItem
      movie={item}
      genreList={this.props.genreList}
      toggleFavorite={
        this.props.favoriteList.find(obj => obj.id === item.id)
          ? () => this.props.removeMovieFromFavorites(item.id)
          : () => this.props.addMovieToFavorites(item)
      }
      isFavorite={!!this.props.favoriteList.find(obj => obj.id === item.id)}
    />
  );

  render() {
    const { genreList } = this.props;
    const { list, favoriteList } = this.props;
    if (!list.length) {
      return <ActivityIndicator />;
    }
    return (
      <View>
        <FlatList
          data={list}
          favorites={favoriteList}
          genreList={genreList}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

MovieList.propTypes = {
  list: propTypes.arrayOf(propTypes.shape()).isRequired,
  genreList: propTypes.arrayOf(propTypes.shape()).isRequired,
  favoriteList: propTypes.arrayOf(propTypes.shape()).isRequired,
  removeMovieFromFavorites: propTypes.func.isRequired,
  addMovieToFavorites: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  favoriteList: state.favoriteList,
  genreList: state.genreList,
});

const mapDispatchToProps = dispatch => ({
  addMovieToFavorites: movie => dispatch(addToFavorites(movie)),
  removeMovieFromFavorites: id => dispatch(removeFromFavorites(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);

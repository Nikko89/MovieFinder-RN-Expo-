/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import {
  removeFromFavorites,
  addToFavorites,
  goToLastPage,
  goToNextPage,
} from '../../../redux/actions';
import DoubleHighlight from '../buttons/DoubleHighlight';

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
    const {
      list, favoriteList, genreList, goLastPage, goNextPage, FavoriteList,
    } = this.props;
    if (!list.length) {
      return <ActivityIndicator />;
    }
    if (FavoriteList) {
      return (
        <FlatList
          bounces={false}
          numColumns={2}
          data={list}
          favorites={favoriteList}
          genreList={genreList}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          initialNumToRender={6}
        />
      );
    }
    return (
      <FlatList
        bounces={false}
        numColumns={2}
        data={list}
        favorites={favoriteList}
        genreList={genreList}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        initialNumToRender={6}
        ListFooterComponent={(
          <DoubleHighlight
            funcOne={() => goLastPage()}
            funcTwo={() => goNextPage()}
            textOne="BACK"
            textTwo="NEXT"
            colorSet="black"
          />
)}
      />
    );
  }
}

MovieList.propTypes = {
  list: propTypes.arrayOf(propTypes.shape()).isRequired,
  genreList: propTypes.arrayOf(propTypes.shape()).isRequired,
  favoriteList: propTypes.arrayOf(propTypes.shape()).isRequired,
  removeMovieFromFavorites: propTypes.func.isRequired,
  addMovieToFavorites: propTypes.func.isRequired,
  goLastPage: propTypes.func.isRequired,
  goNextPage: propTypes.func.isRequired,
  FavoriteList: propTypes.bool,
};

MovieList.defaultProps = {
  FavoriteList: false,
};

const mapStateToProps = state => ({
  favoriteList: state.favoriteList,
  genreList: state.genreList,
});

const mapDispatchToProps = dispatch => ({
  addMovieToFavorites: movie => dispatch(addToFavorites(movie)),
  removeMovieFromFavorites: id => dispatch(removeFromFavorites(id)),
  goLastPage: () => dispatch(goToLastPage()),
  goNextPage: () => dispatch(goToNextPage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);

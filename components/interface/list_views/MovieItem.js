/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Modal,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import propTypes from 'prop-types';
import { Text, Rating, Divider } from 'react-native-elements';
import SimpleButton from '../buttons/SimpleButton';
import SingleView from './SingleView';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: '#fff',
    width: width / 2,
    flex: 0.5,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tooltip: {
    alignSelf: 'center',
    width: 300,
  },
  text: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  smallText: {
    color: 'grey',
    fontSize: 13,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  buttonRow: {
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  iconStyle: {
    color: 'white',
    backgroundColor: 'white',
    borderWidth: 0,
  },
  modal: {
    height,
    paddingBottom: 15,
  },
  titleView: {
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.85)',
    width: '100%',
    height: 60,
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    overflow: 'hidden',
    paddingHorizontal: 20,
  },
});

class MovieItem extends React.PureComponent {
  state = {
    showModal: false,
  };

  mapGenres = (ids, genreList) => genreList.filter(el => ids.includes(el.id)).map(el => el.name);

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const {
      movie, toggleFavorite, genreList, isFavorite,
    } = this.props;
    const { showModal } = this.state;
    const posterImg = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    const voteInfo = `${movie.vote_average}/10 on ${movie.vote_count} votes`;
    return (
      <View style={styles.container}>
        {posterImg ? (
          <TouchableHighlight onPress={this.toggleModal}>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              source={{ uri: posterImg }}
            >
              <View style={styles.titleView}>
                <Text style={styles.titleText}>
                  {movie.title.length > 21
                    ? `${movie.title.substring(0, 17)}...`
                    : `${movie.title}`}
                </Text>
              </View>
            </ImageBackground>
          </TouchableHighlight>
        ) : (
          <Text>No image for this movie!</Text>
        )}
        <Modal visible={showModal} animationType="slide" onRequestClose={() => this.toggleModal()}>
          <View style={styles.modal}>
            <SingleView
              movie={movie}
              genres={this.mapGenres(movie.genre_ids, genreList)}
              closeModal={() => this.toggleModal}
            />
          </View>
        </Modal>
        {/* <View style={[styles.section]}>
          <Text style={styles.text}>
            {movie.title.length > 21 ? `${movie.title.substring(0, 17)}...` : `${movie.title}`}
          </Text>
          <Rating
            readonly
            maxStars={5}
            startingValue={movie.vote_average / 2}
            imageSize={25}
            style={{ marginTop: 7, marginBottom: 7 }}
            fullStarColor="green"
            emptyStarColor="green"
          />
          <Text style={styles.smallText}>{voteInfo}</Text>
          <View style={styles.buttonRow}>
            <SimpleButton
              type="outline"
              color={isFavorite ? 'orange' : 'green'}
              style={styles.button}
              iconSize={50}
              iconName={isFavorite ? 'remove-circle' : 'add-circle'}
              click={() => toggleFavorite(movie)}
            />
            <SimpleButton
              type="outline"
              second
              style={styles.button}
              iconSize={50}
              iconName="eye"
              click={this.toggleModal}
            />
          </View>
          <Text style={{ fontWeight: 'bold' }}>
            Release: &nbsp;
            {movie.release_date.substring(0, 4)}
          </Text>
        </View> */}
      </View>
    );
  }
}

MovieItem.propTypes = {
  movie: propTypes.shape().isRequired,
  genreList: propTypes.arrayOf(propTypes.shape()).isRequired,
  toggleFavorite: propTypes.func.isRequired,
  isFavorite: propTypes.bool.isRequired,
};

export default MovieItem;

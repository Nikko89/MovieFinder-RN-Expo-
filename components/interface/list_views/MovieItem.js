/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View, StyleSheet, Image, Modal,
} from 'react-native';
import propTypes from 'prop-types';
import { Text, Rating, Divider } from 'react-native-elements';
import window from '../../../constants/layout';
import SimpleButton from '../buttons/SimpleButton';
import SingleView from './SingleView';

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#fff',
    width: window.width,
    flexDirection: 'row',
    marginBottom: 10,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width * 0.5,
    marginVertical: 15,
    padding: 15,
  },
  tooltip: {
    alignSelf: 'center',
    width: 300,
  },
  desc: {
    justifyContent: 'flex-start',
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
    height: window.height,
    paddingBottom: 15,
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
        <View style={styles.section}>
          <Image
            style={{
              width: 175,
              height: 250,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={{ uri: posterImg }}
          />
        </View>
        <Modal visible={showModal} animationType="slide" onRequestClose={() => this.toggleModal()}>
          <View style={styles.modal}>
            <SingleView
              movie={movie}
              genres={this.mapGenres(movie.genre_ids, genreList)}
              closeModal={() => this.toggleModal}
            />
          </View>
        </Modal>
        <View style={[styles.section, styles.desc]}>
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
        </View>
        <Divider style={{ backgroundColor: 'blue', height: 2 }} />
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

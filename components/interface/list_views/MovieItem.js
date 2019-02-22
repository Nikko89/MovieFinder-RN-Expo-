/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import propTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import window from '../../../constants/layout';
import SimpleButton from '../buttons/SimpleButton';

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#fff',
    width: window.width,
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 3,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width * 0.5,
    marginVertical: 15,
    padding: 15,
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
    flex: 1,
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
});

const MovieItem = (props) => {
  const { movie } = props;
  const source = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
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
          source={{ uri: source }}
        />
      </View>
      <View style={[styles.section, styles.desc]}>
        <Text style={styles.text}>
          {movie.title.length > 21 ? movie.title.substr(0, 20) : `${movie.title}...`}
        </Text>
        <StarRating
          disabled
          maxStars={5}
          rating={movie.vote_average / 2}
          starSize={30}
          style={{ marginTop: 7, marginBottom: 7 }}
          fullStarColor="green"
          emptyStarColor="green"
        />
        <Text style={styles.smallText}>{voteInfo}</Text>
        <View style={styles.buttonRow}>
          <SimpleButton
            type="outline"
            color="white"
            style={styles.button}
            iconSize={50}
            iconName="add-circle"
          />
          <SimpleButton type="outline" second style={styles.button} iconSize={50} iconName="eye" />
        </View>
      </View>
    </View>
  );
};

MovieItem.propTypes = {
  movie: propTypes.shape().isRequired,
};

export default MovieItem;

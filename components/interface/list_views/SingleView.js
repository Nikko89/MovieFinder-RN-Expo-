/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StyleSheet, View, ScrollView, ActivityIndicator, Dimensions,
} from 'react-native';
import {
  Text, Header, Image, Rating, Divider,
} from 'react-native-elements';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
  details: {
    marginHorizontal: 15,
  },
  divider: {
    height: 2,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 7,
    textTransform: 'uppercase',
  },
});

const fullWidth = Dimensions.get('screen').width;

const imgRoot = 'https://image.tmdb.org/t/p/w300';

const SingleView = (props) => {
  const { movie, genres, closeModal } = props;
  const voteInfo = `${movie.vote_average}/10 on ${movie.vote_count} votes`;
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <Header
        containerStyle={{
          backgroundColor: 'blue',
          justifyContent: 'space-around',
          margin: 0,
        }}
        placement="left"
        leftComponent={{
          icon: 'cancel',
          color: 'white',
          onPress: closeModal(),
          size: 37.5,
        }}
        centerComponent={{
          icon: 'menu',
          text: (
            <ScrollView horizontal contentContainerStyle={{ marginTop: 8 }}>
              <Text h4 style={{ color: 'white' }}>
                {movie.title}
              </Text>
            </ScrollView>
          ),
        }}
        barStyle="dark-content"
      />
      <Image
        source={{ uri: `${imgRoot}${movie.backdrop_path}` }}
        PlaceholderContent={<ActivityIndicator />}
        style={{ width: fullWidth, height: 240 }}
        resizeMode="contain"
      />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.sectionHeader}>Plot</Text>
        <Divider style={styles.divider} />
        <Text style={{ fontSize: 18, marginBottom: 15 }}>{movie.overview}</Text>
        <Rating
          readonly
          maxStars={5}
          startingValue={movie.vote_average / 2}
          imageSize={45}
          style={{ marginVertical: 7 }}
          fullStarColor="green"
          emptyStarColor="green"
        />
        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 15 }}>
          {voteInfo}
        </Text>
        <Text style={styles.sectionHeader}>Categories</Text>
        <Divider style={styles.divider} />
        <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 15 }}>
          {genres.map(genre => (genre === genres[genres.length - 1]
            ? `${genre.toUpperCase()}`
            : `${genre.toUpperCase()}, `))}
        </Text>
        <Text style={styles.sectionHeader}>Release Date</Text>
        <Divider style={styles.divider} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 26,
            fontWeight: '600',
            color: 'lightgreen',
          }}
        >
          {movie.release_date.replace(/-/g, '/')}
        </Text>
      </View>
    </ScrollView>
  );
};

SingleView.propTypes = {
  movie: propTypes.shape().isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  closeModal: propTypes.func.isRequired,
};

export default SingleView;

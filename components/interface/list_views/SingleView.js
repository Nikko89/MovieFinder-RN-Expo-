/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StyleSheet, View, ScrollView, ActivityIndicator, Dimensions,
} from 'react-native';
import {
  Text, Header, Image, Rating,
} from 'react-native-elements';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {},
  details: {
    marginHorizontal: 15,
  },
  detailsSection: {
    marginVertical: 20,
    padding: 20,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const fullWidth = Dimensions.get('screen').width;

const imgRoot = 'https://image.tmdb.org/t/p/w300';

const SingleView = (props) => {
  const { movie, genres, closeModal } = props;
  const voteInfo = `${movie.vote_average}/10 on ${movie.vote_count} votes`;
  return (
    <View style={styles.container}>
      <Header
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'center',
        }}
        placement="left"
        centerContainerStyle={{ flex: 3 }}
        leftComponent={{
          icon: 'cancel',
          color: 'blue',
          onPress: closeModal(),
          size: 27.5,
        }}
        centerComponent={{
          icon: 'menu',
          text: (
            <ScrollView horizontal contentContainerStyle={{ marginTop: 8 }}>
              <Text h4 style={{ color: 'blue' }}>
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
      <ScrollView>
        <View style={styles.details}>
          <View>
            <Text style={{ fontSize: 18, marginTop: 10 }}>{movie.overview}</Text>
            <View style={styles.detailsSection}>
              <Rating
                readonly
                maxStars={5}
                startingValue={movie.vote_average / 2}
                imageSize={45}
                style={{ marginTop: 7, marginBottom: 7 }}
                fullStarColor="green"
                emptyStarColor="green"
              />
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{voteInfo}</Text>
            </View>
            <View style={{ ...styles.detailsSection }}>
              <Text style={{ ...styles.sectionHeader }}>Genres:</Text>
              <Text style={{ textAlign: 'center', fontSize: 18 }}>
                {genres.map(genre => (genre === genres[genres.length - 1]
                  ? `${genre.toUpperCase()}`
                  : `${genre.toUpperCase()}, `))}
              </Text>
            </View>
            <View style={styles.detailsSection}>
              <Text style={styles.sectionHeader}>Release:</Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  fontStyle: 'italic',
                  fontWeight: '600',
                }}
              >
                {movie.release_date.replace(/-/g, '/')}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

SingleView.propTypes = {
  movie: propTypes.shape().isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  closeModal: propTypes.func.isRequired,
};

export default SingleView;

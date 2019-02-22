/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import { LinearGradient } from 'expo';
import SimpleButton from '../buttons/SimpleButton';

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#bbb',
    borderBottomWidth: 3,
  },
});

export default class SearchForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(0,0,0,0.4)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 100,
          }}
        />

        <SimpleButton
          click={() => handleSubmit}
          title="search again"
          iconName="search"
          style={{ width: 200 }}
        />
      </View>
    );
  }
}

SearchForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};

/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  Text, View, TouchableHighlight, StyleSheet, Dimensions,
} from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    borderBottomColor: '#bbb',
    borderBottomWidth: 3,
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: 5,
    height: 50,
    width: width / 2 - 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  separator: {
    width: 3,
    backgroundColor: 'white',
  },
  entryText: {
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default class DoubleHighlight extends Component {
  render() {
    const {
      funcOne, funcTwo, colorSet, textOne, textTwo,
    } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} underlayColor={colorSet} onPress={funcOne}>
          <Text h4 style={styles.entryText}>
            {textOne}
          </Text>
        </TouchableHighlight>
        <View style={styles.separator} />
        <TouchableHighlight style={styles.button} onPress={funcTwo} underlayColor={colorSet}>
          <Text h4 style={styles.entryText}>
            {textTwo}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

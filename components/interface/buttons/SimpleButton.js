/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Platform } from 'react-native';
import { Icon } from 'expo';
import propTypes from 'prop-types';

export default class SimpleButton extends Component {
  render() {
    const {
      title, iconName, type, click, iconSize, style, color, second,
    } = this.props;
    return (
      <Button
        icon={(
          <Icon.Ionicons
            name={Platform.OS === 'ios' ? `ios-${iconName}` : `md-${iconName}`}
            size={Number.parseInt(iconSize, 10)}
            style={
              ({ marginBottom: -3 },
              title && { marginRight: 10, marginBottom: -3, backgroundColor: 'blue' })
            }
            color={color || (second ? 'green' : 'orange')}
          />
)}
        title={title}
        type={type}
        buttonStyle={{ ...style }}
        onPress={click}
      />
    );
  }
}

SimpleButton.propTypes = {
  title: propTypes.string,
  iconName: propTypes.string,
  type: propTypes.string,
  click: propTypes.func.isRequired,
  iconSize: propTypes.number,
  style: propTypes.shape(),
  color: propTypes.string,
  second: propTypes.bool,
};

SimpleButton.defaultProps = {
  title: '',
  iconName: 'search',
  type: 'solid',
  iconSize: 36,
  style: {},
  color: 'blue',
  second: false,
};

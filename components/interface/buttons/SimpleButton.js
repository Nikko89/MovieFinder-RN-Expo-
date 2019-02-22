/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Platform } from 'react-native';
import { Icon } from 'expo';

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
            size={Number.parseInt(iconSize, 10) || 36}
            style={({ marginBottom: -3 }, title && { marginRight: 10, marginBottom: -3 })}
            color={second ? 'green' : 'orange'}
          />
)}
        title={title}
        type={type}
        containerStyle={{ ...style }}
        onPress={click}
        color={color}
      />
    );
  }
}

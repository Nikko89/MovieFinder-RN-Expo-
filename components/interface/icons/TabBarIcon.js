/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Icon } from 'expo';
import propTypes from 'prop-types';

export default class TabBarIcon extends React.Component {
  render() {
    const { name, focused } = this.props;
    return (
      <Icon.Ionicons
        name={name}
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? 'blue' : 'black'}
      />
    );
  }
}

TabBarIcon.propTypes = {
  name: propTypes.string.isRequired,
  focused: propTypes.bool.isRequired,
};

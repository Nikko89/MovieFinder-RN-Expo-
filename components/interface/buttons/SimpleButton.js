import React, { Component } from "react";
import { Button } from "react-native-elements";
import { Icon } from "expo";

export default class SimpleButton extends Component {
  render() {
    const { title, iconName, type, click } = this.props;
    return (
      <Button
        icon={
          <Icon.Ionicons
            name={iconName}
            size={36}
            style={{ marginBottom: -3, marginRight: 10 }}
            color={this.props.focused ? "blue" : "black"}
          />
        }
        title={title}
        type={type}
        style={{ width: 200 }}
        onPress={click}
      />
    );
  }
}

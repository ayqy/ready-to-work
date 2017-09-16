import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };

  _inputRef: null;

  handleLogin = () => {
    this.props.onLogin({
      username: this._inputRef.value,
      loggedIn: true
    });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <Input ref={(ref) => { this._inputRef = ref; }} placeholder="user name" type="text" />
        <Button onClick={this.handleLogin}>Log In</Button>
      </div>
    );
  }
}

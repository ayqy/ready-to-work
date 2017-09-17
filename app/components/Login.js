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
        <Button>返回</Button>
        <Input ref={(ref) => { this._inputRef = ref; }} placeholder="账号" type="text" />
        <Input placeholder="密码" type="password" />
        <Button onClick={this.handleLogin}>登录</Button>
      </div>
    );
  }
}

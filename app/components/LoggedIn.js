import React, { Component } from 'react';
import { Alert } from 'antd';

export default class LoggedIn extends Component {
  render() {
    return (
      <div>
        <Alert message={'LoggedIn as ' + this.props.user.username} type="success" />
      </div>
    );
  }
}

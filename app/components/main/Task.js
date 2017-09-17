import React, { Component } from 'react';
import { Alert } from 'antd';

export default class Task extends Component {
  propsTypes = {
  };
  render() {
    return (
      <div>
        <Alert message={'Task list'} type="success"></Alert>
      </div>
    );
  }
}

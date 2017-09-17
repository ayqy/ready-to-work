import React, { Component } from 'react';
import { Alert } from 'antd';

import HeaderBar from '../containers/common/HeaderBar';

export default class History extends Component {
  render() {
    return (
      <div className="history">
        <HeaderBar/>
        <Alert message={'History Page'} type="success" />
      </div>
    );
  }
}

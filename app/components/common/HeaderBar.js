import React, { Component } from 'react';
import { Button } from 'antd';

export default class HeaderBar extends React.Component {
  render() {
    const padding = '6px';
    return (
      <div>
        <div className="header header-bar">
          <Button onClick={this.props.toMainPage} style={{marginLeft: padding}} size="small" shape="circle" icon="left" />
        </div>
      </div>
    );
  }
}

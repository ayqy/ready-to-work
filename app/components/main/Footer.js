import React, { Component } from 'react';
import { Button, Radio, Row, Col } from 'antd';

export default class Header extends Component {
  render() {
    const padding = '6px';
    return (
      <div className="main-footer footer">
        <Row style={{padding: `${padding} 0`}}>
          <Col span={8}>
            <Button onClick={this.props.handleSyncClick} style={{marginLeft: padding}} size="small" shape="circle" icon="sync" />
          </Col>
          <Col span={8} offset={8} style={{textAlign: 'right'}}>
            <Button onClick={this.props.handleLoginClick} style={{marginRight: padding}} size="small" shape="circle" icon="user" />
            <Button onClick={this.props.handleSettingClick} style={{marginRight: padding}} size="small" shape="circle" icon="setting" />
          </Col>
        </Row>
      </div>
    );
  }
}

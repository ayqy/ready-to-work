import React, { Component, PropTypes } from 'react';
import { Button, Radio, Row, Col } from 'antd';

export default class Header extends Component {
  propsTypes = {
    activeTab: PropTypes.string.isRequired
  };
  render() {
    const padding = '6px';
    return (
      <div className="main-header">
        <Row style={{padding: `${padding} 0`}}>
          <Col span={8}>
            <Button onClick={this.props.handleHistoryClick} style={{marginLeft: padding}} size="small" shape="circle" icon="clock-circle-o" />
          </Col>
          <Col span={8} style={{textAlign: 'center'}}>
            <Radio.Group size="small" value={this.props.activeTab} onChange={this.handleTabChange.bind(this)}>
              <Radio.Button value="task">任务</Radio.Button>
              <Radio.Button value="pomodoro">番茄</Radio.Button>
            </Radio.Group>
          </Col>
          <Col span={8} style={{textAlign: 'right'}}>
            <Button onClick={this.props.stickWindow} style={{marginRight: padding}} size="small" shape="circle" icon="pushpin-o" />
          </Col>
        </Row>
      </div>
    );
  }
  handleTabChange(e) {
    this.props.handleTabChange(e.target.value);
  }
}

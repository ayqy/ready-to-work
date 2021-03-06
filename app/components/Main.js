import React, { Component } from 'react';
import { Alert, Button } from 'antd';

import Header from './main/Header';
import Task from './main/Task';
import Timer from './main/Timer';
import Footer from './main/Footer';


export default class Main extends Component {
  state = {
    activeTab: 'pomodoro'
  };
  render() {
    return (
      <div>
        <Header
          activeTab={this.state.activeTab}
          stickWindow={this.props.stickWindow}
          handleTabChange={this.handleTabChange.bind(this)}
          handleHistoryClick={this.props.toHistoryPage}>
        </Header>
        <div className="main-content content">
          {this.state.activeTab === 'task' &&  <Task></Task>}
          {this.state.activeTab === 'pomodoro' && <Timer
            setTrayText={this.props.setTrayText}
            setting={this.props.setting}></Timer>
          }
        </div>
        <Footer
          handleSyncClick={this.props.sync}
          handleLoginClick={this.props.toLoginPage}
          handleSettingClick={this.props.toSettingPage}>
        </Footer>
      </div>
    );
  }
  handleTabChange(tabName) {
    // switch tab
    this.setState({
      activeTab: tabName
    })
  }
}

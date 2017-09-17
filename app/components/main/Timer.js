import React, { Component } from 'react';
import { Button, Progress } from 'antd';

import notify, { NOTIFY_TYPES } from '../../utils/notify';
import path from 'path';

let options = [
  {
    title: '文本通知标题',
    body: '文本消息内容'
  },
  {
    title: '图文通知标题',
    body: '图文消息内容',
    icon: path.join(__dirname, '../../resources/icon/tray.png')
  }
];

const initialState = {
  percent: 0,
  countDown: '25:00'
};
export default class Timer extends Component {
  static defaultProps = {
    duration: 25
  };
  state = {...initialState};
  render() {
    const duration = this.props.duration;
    return (
      <div className="main-timer">
        <div className="main-timerClock">
          <Button className="main-timerClock-abort" onClick={this.abortTimer.bind(this)} type="danger" size="large" shape="circle" icon="close" />
          <Progress type="circle" percent={this.state.percent} width={200} format={percent => percent >= 100 ? 'Done' : this.state.countDown} />
        </div>
        <Button onClick={this.onNotify.bind(this, NOTIFY_TYPES.PLAIN)}>文本通知</Button>
        <Button onClick={this.onNotify.bind(this, NOTIFY_TYPES.RICH_IMAGE)}>图文通知</Button>
      </div>
    );
  }
  componentDidMount() {
    this.tickTock();
  }
  onNotify(type) {
    switch (type) {
        case NOTIFY_TYPES.PLAIN:
            notify(options[0]);
            break;
        case NOTIFY_TYPES.RICH_IMAGE:
            notify(options[1]);
            break;
        default:
            break;
    }
  }
  abortTimer() {
    this.stopTimer();
    // reset
    this.setState({...initialState});
  }
  stopTimer() {
    clearInterval(this.timer);
  }
  tickTock() {
    const TOTAL = this.props.duration * 60;
    let now = this.props.duration * 60;
    this.timer = setInterval(() => {
      if (!now--) this.stopTimer();
      this.setState({
        percent: now > 0 ? (1 - now / TOTAL) * 100 : 100,
        countDown: this.formatTime(now)
      });
    }, 1000);
  }
  formatTime(seconds) {
    let m = ~~(seconds / 60);
    let s = seconds % 60;
    return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  }
}

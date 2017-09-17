import React, { Component } from 'react';
import { Button, Progress } from 'antd';

import notify, { NOTIFY_TYPES } from '../../utils/notify';
import path from 'path';

const initialState = {
  percent: 0,
  countDown: ''
};
export default class Timer extends Component {
  state = {...initialState};
  render() {
    const duration = parseInt(this.props.setting.duration, 10);
    this.duration = duration;
    this.defaultCountDown = this.formatTime(duration * 60);

    return (
      <div className="main-timer">
        <div className="main-timerClock">
          <Button className="main-timerClock-abort" onClick={this.abortTimer.bind(this)} type="danger" size="large" shape="circle" icon="close" />
          <Progress type="circle" percent={this.state.percent} width={200} format={percent => percent >= 100 ? 'Done' : this.state.countDown || this.defaultCountDown} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.tickTock();
  }
  componentWillUnmount() {
    this.stopTimer();
  }
  notify(type) {
    let opts = {
      title: 'Time is up',
      body: `专注的${this.props.setting.duration}分钟结束了，休息一下吧`
    };
    if (type === NOTIFY_TYPES.RICH_IMAGE) {
      opts.icon = path.join(__dirname, '../../resources/icon/tray.png')
    }

    notify(opts);
  }
  abortTimer() {
    this.stopTimer();
    // reset
    this.setState({...initialState});
    this.props.setTrayText(this.defaultCountDown);
  }
  stopTimer() {
    clearInterval(this.timer);
  }
  tickTock() {
    const duration = this.duration;
    const TOTAL = duration * 60;
    let now = duration * 60;
    this.timer = setInterval(() => {
      // time is up
      if (!--now) {
        this.stopTimer();
        this.notify(NOTIFY_TYPES.PLAIN);
      }
      const countDown = this.formatTime(now)
      this.setState({
        percent: now > 0 ? (1 - now / TOTAL) * 100 : 100,
        countDown
      });
      this.props.setTrayText(countDown);
    }, 1000);
  }
  formatTime(seconds) {
    let m = ~~(seconds / 60);
    let s = seconds % 60;
    return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  }
}

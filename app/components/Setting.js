import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col, Select } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

import HeaderBar from '../containers/common/HeaderBar';

const defaultSetting = {
  duration: '25',
  duration_options: new Array(12).fill(0).map((v, i) => (i + 1) * 5 + ''),
  short_break: '5',
  short_break_options: new Array(15).fill(0).map((v, i) => i + 1 + ''),
  long_break: '5',
  long_break_options: new Array(6).fill(0).map((v, i) => (i + 1) * 5 + ''),
  long_break_after: '4',
  long_break_after_options: new Array(9).fill(0).map((v, i) => i + 2 + ''),
  target: '10',
  target_options: new Array(15).fill(0).map((v, i) => i + 4 + ''),
  auto_launch: true,
  notifiy_desktop: true,
  notifiy_sound: false,
  tray_timer: true
};
const formItemLayout = {
  labelCol: {
    span: 8,
    offset: 2
  },
  wrapperCol: {
    span: 10,
    offset: 2
  },
};
class SettingForm extends Component {
  static defaultProps = {...defaultSetting};
  render() {
    const { getFieldDecorator } = this.props.form;
    const padding = '6px';
    const selectWidth = '100px';
    const DURATION_UNIT = '分钟';

    return (
      <div className="setting">
        <HeaderBar/>
        <Form onSubmit={this.handleSubmit.bind(this)} className="setting-form" ref="form">
          <FormItem
            {...formItemLayout}
            label="一个番茄钟"
            style={{marginBottom: 0}}>
            {getFieldDecorator('duration', {
              rules: [{ required: false, message: 'Please select a pomodoro duration!' }],
              initialValue: this.props.duration
            })(
              <Select style={{width: selectWidth, display: 'inline-block'}} size="small">
                {
                  this.props.duration_options.map(d => <Option key={d} value={d}>{d + DURATION_UNIT}</Option>)
                }
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="小休息"
            style={{marginBottom: 0}}>
            {getFieldDecorator('short_break', {
              rules: [{ required: false, message: 'Please select a short break!' }],
              initialValue: this.props.short_break
            })(
              <Select style={{width: selectWidth, display: 'inline-block'}} size="small">
                {
                  this.props.short_break_options.map(d => <Option key={d} value={d}>{d + DURATION_UNIT}</Option>)
                }
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="大休息"
            style={{marginBottom: 0}}>
            {getFieldDecorator('long_break', {
              rules: [{ required: false, message: 'Please select a long break!' }],
              initialValue: this.props.long_break
            })(
              <Select style={{width: selectWidth, display: 'inline-block'}} size="small">
                {
                  this.props.long_break_options.map(d => <Option key={d} value={d}>{d + DURATION_UNIT}</Option>)
                }
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="每几个番茄后大休息"
            style={{marginBottom: 0}}>
            {getFieldDecorator('long_break_after', {
              rules: [{ required: false, message: 'Please select a long break after!' }],
              initialValue: this.props.long_break_after
            })(
              <Select style={{width: selectWidth, display: 'inline-block'}} size="small">
                {
                  this.props.long_break_after_options.map(d => <Option key={d} value={d}>{d + '个番茄'}</Option>)
                }
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="每日目标"
            style={{marginBottom: 0}}>
            {getFieldDecorator('target', {
              rules: [{ required: false, message: 'Please select a target!' }],
              initialValue: this.props.target
            })(
              <Select style={{width: selectWidth, display: 'inline-block'}} size="small">
                {
                  this.props.target_options.map(d => <Option key={d} value={d}>{d + '个番茄'}</Option>)
                }
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="开机启动"
            style={{marginBottom: 0}}>
            {getFieldDecorator('auto_launch', {
              valuePropName: 'checked',
              initialValue: this.props.auto_launch
            })(
              <Checkbox></Checkbox>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="桌面通知"
            style={{marginBottom: 0}}>
            {getFieldDecorator('notifiy_desktop', {
              valuePropName: 'checked',
              initialValue: this.props.notifiy_desktop
            })(
              <Checkbox></Checkbox>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="声音通知"
            style={{marginBottom: 0}}>
            {getFieldDecorator('notifiy_sound', {
              valuePropName: 'checked',
              initialValue: this.props.notifiy_sound
            })(
              <Checkbox></Checkbox>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="系统栏显示倒计时"
            style={{marginBottom: 0}}>
            {getFieldDecorator('tray_timer', {
              valuePropName: 'checked',
              initialValue: this.props.tray_timer
            })(
              <Checkbox></Checkbox>
            )}
          </FormItem>

          <FormItem style={{textAlign: 'center'}}>
            <Button size="small" onClick={this.resetToDefault.bind(this)}>
              推荐设置
            </Button>
            <Button size="small" htmlType="submit" className="setting-form-button">
              保存
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.props.saveSetting(values);
      }
    });
  }
  resetToDefault() {
    const newFields = {};
    Object.keys(defaultSetting).filter(
      key => key.indexOf('_options') === -1
    ).forEach(key => (newFields[key] = {value: defaultSetting[key]}))
    this.props.form.setFields(newFields);
  }
}

const WrappedSettingForm = Form.create()(SettingForm);
export default WrappedSettingForm;

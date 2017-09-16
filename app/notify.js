const path = require('path');

const NOTIFY_TIMEOUT = 5000;

let options = [
  {
    title: '文本通知标题',
    body: '文本消息内容'
  },
  {
    title: '图文通知标题',
    body: '图文消息内容',
    icon: path.join(__dirname, './resource/icon/pomodoro.png')
  }
];

function doNotify(e) {
  let notification;
  // todo: be quiet on disturb state
  // https://github.com/felixrieseberg/electron-notification-state
  if (e.srcElement.id === 'basic') {
    notification = new Notification(options[0].title, options[0]);
  }
  else if (e.srcElement.id === 'image') {
    notification = new Notification(options[1].title, options[1]);
  }

  // hide automatically
  setTimeout(function() {
    if (notification) notification.close();
  }, NOTIFY_TIMEOUT);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('basic').addEventListener('click', doNotify);
  document.getElementById('image').addEventListener('click', doNotify);
});
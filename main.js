const menubar = require('menubar');
const path = require('path');

// mb = {
//   app: the atom shell require('app') instance,
//   window: the atom shell require('browser-window') instance,
//   tray: the atom shell require('tray') instance
// }
let mb = menubar({
  icon: path.join(__dirname, './resource/icon/pomodoro.png'),
  width: 400,
  height: 400
});

// ready - when the app has been created and initialized
// create-window - the line before new BrowserWindow is called
// after-create-window - the line after all window init code is done
// show - the line before window.show is called
// after-show - the line after window.show is called
// hide - the line before window.hide is called (on window blur)
// after-hide - the line after window.hide is called
mb.on('ready', function ready () {
  console.log('ready to work');
  // show timer at mac status bar
  if (process.platform === 'darwin') {
    mb.tray.setTitle('25:00');
  }
});
import path from 'path';
import url from 'url';
import {app, crashReporter, Menu} from 'electron';
import menubar from 'menubar';
import AutoLaunch from 'auto-launch';

import * as ipcMain from './ipcMain';

const isDevelopment = (process.env.NODE_ENV === 'development');


// mb = {
//   app: the electron require('app') instance,
//   window: the electron require('browser-window') instance,
//   tray: the electron require('tray') instance,
//   positioner: the electron-positioner instance,
//   setOption(option, value): change an option after menubar is created,
//   getOption(option): get an menubar option,
//   showWindow(): show the menubar window,
//   hideWindow(): hide the menubar window
// }
let mb = menubar({
  index: 'file://' + path.join(__dirname, 'index.html'),
  icon: path.join(__dirname, './resources/icon/tray.png'),
  width: 400,
  height: 400,
  preloadWindow: true
});
ipcMain.init(mb);

// ready - when the app has been created and initialized
// create-window - the line before new BrowserWindow is called
// after-create-window - the line after all window init code is done
// show - the line before window.show is called
// after-show - the line after window.show is called
// hide - the line before window.hide is called (on window blur)
// after-hide - the line after window.hide is called
mb.on('ready', async () => {
  console.log('ready to work');
  if (isDevelopment) {
    await installExtensions();
  }
  // show timer at mac status bar
  mb.tray.setTitle('25:00');

  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  let mainWindow = mb.window;
  // disable resize
  mainWindow.setResizable(false);
  let forceQuit = false;
  mainWindow && mainWindow.webContents.on('did-finish-load', () => {
    // Handle window logic properly on macOS:
    // 1. App should not terminate if window has been closed
    // 2. Click on icon in dock should re-open the window
    // 3. ⌘+Q should close the window and quit the app
    if (process.platform === 'darwin') {
      mainWindow.on('close', function (e) {
        if (!forceQuit) {
          e.preventDefault();
          mainWindow.hide();
        }
      });

      app.on('activate', () => {
        mainWindow.show();
      });

      app.on('before-quit', () => {
        forceQuit = true;
        // remove all listener
        ipcMain.clear();
      });
    } else {
      mainWindow.on('closed', () => {
        mainWindow = null;
      });
    }
  });

  if (isDevelopment && mainWindow) {
    // auto-open dev tools
    mainWindow.webContents.openDevTools();

    // add inspect element on right click menu
    mainWindow.webContents.on('context-menu', (e, props) => {
      Menu.buildFromTemplate([{
        label: 'Inspect element',
        click() {
          mainWindow.inspectElement(props.x, props.y);
        }
      }]).popup(mainWindow);
    });
  }
});

// crashReporter.start({
//   productName: 'YourName',
//   companyName: 'YourCompany',
//   submitURL: 'https://your-domain.com/url-to-submit',
//   uploadToServer: false
// });


let autoLauncher = new AutoLaunch({
    name: 'ReadyToWork'
});

autoLauncher.isEnabled()
.then((isEnabled) => {
  if(isEnabled){
    return;
  }
  return autoLauncher.enable();
})
.then(res => {
  console.log('auto launch enabled');
})
.catch((err) => {
    console.error('enable auto launch failed. ' + err);
});

async function installExtensions() {
  const installer = require('electron-devtools-installer');
  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS'
  ];
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  for (const name of extensions) {
    try {
      await installer.default(installer[name], forceDownload);
    } catch (e) {
      console.log(`Error installing ${name} extension: ${e.message}`);
    }
  }
};

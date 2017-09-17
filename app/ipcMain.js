// In main process.
import {ipcMain} from 'electron';

let listenerMap = {};
export function init(menubar, storage) {
  ipcMain.on('stickWindow', listenerMap['stickWindow'] = (event, shouldStick) => {
    menubar.setOption('alwaysOnTop', shouldStick);
    event.sender.send('stickWindow', 0);
  });

  ipcMain.on('setTrayText', listenerMap['setTrayText'] = (event, trayText) => {
    menubar.tray.setTitle(trayText);
    event.returnValue = 0;
  });

  // basic value type only
  ipcMain.on('saveSetting', listenerMap['saveSetting'] = (event, kv) => {
    for (let k in kv) {
      storage.set(k, kv[k]);
      // console.log(k, kv[k]);
    }
    event.returnValue = 0;
  });
  ipcMain.on('readSetting', listenerMap['readSetting'] = (event) => {
    event.returnValue = storage.store;
  });
}

export function clear() {
  for (let channel in listenerMap) {
    ipcMain.removeAllListeners(channel);
  }
  listenerMap = null;
}

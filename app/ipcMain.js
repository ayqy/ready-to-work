// In main process.
import {ipcMain} from 'electron';

let listenerMap = {};
export function init(menubar) {
  ipcMain.on('stickWindow', listenerMap['stickWindow'] = (event, shouldStick) => {
    menubar.setOption('alwaysOnTop', shouldStick);
    event.sender.send('stickWindow', 0);
  });

  ipcMain.on('setTrayText', listenerMap['setTrayText'] = (event, trayText) => {
    menubar.tray.setTitle(trayText);
    event.returnValue = 0;
  });
}

export function clear() {
  for (let channel in listenerMap) {
    ipcMain.removeAllListeners(channel);
  }
  listenerMap = null;
}

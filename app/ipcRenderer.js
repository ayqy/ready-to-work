// In renderer process (web page).
import {ipcRenderer} from 'electron';

export function stickWindow(shouldStick) {
  ipcRenderer.send('stickWindow', shouldStick);
}
ipcRenderer.on('stickWindow', (event, result) => {
  if (result !== 0) console.error('stickWindow ' + result);
});

export function setTrayText(trayText) {
  ipcRenderer.sendSync('setTrayText', trayText);
}

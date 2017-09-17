import { handleActions } from 'redux-actions';
import actions from '../actions/setting';

import * as ipcRenderer from '../ipcRenderer';

export default handleActions({
  [actions.update]: (state, action) => {
    ipcRenderer.saveSetting(action.payload);
    return { ...state, ...action.payload };
  }
}, {});

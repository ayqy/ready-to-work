import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

import Main from '../components/Main';
import userActions from '../actions/user';
import * as ipcRenderer from '../ipcRenderer';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const user = bindActionCreators(userActions, dispatch);
  return {
    onLogin(data) {
      user.login(data);
      dispatch({type: 'loggin'});
    },
    toHistoryPage() {
      dispatch(push('/history'));
    },
    toLoginPage() {
      dispatch(push('/login'));
    },
    toSettingPage() {
      dispatch(push('/setting'));
    },
    sync() {
      dispatch({type: 'sync'});
    },
    stickWindow: ipcRenderer.stickWindow,
    setTrayText: ipcRenderer.setTrayText,
    readSetting: ipcRenderer.readSetting
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

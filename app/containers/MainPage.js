import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Main from '../components/Main';
import userActions from '../actions/user';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const user = bindActionCreators(userActions, dispatch);
  return {
    onLogin: (data) => {
      user.login(data);
      dispatch('loggin');
    },
    stickWindow: (data) => {
      dispatch('stickWindow');
    },
    toHistoryPage: () => {
        dispatch(push('/history'));
    },
    toLoginPage: () => {
        dispatch(push('/login'));
    },
    toSettingPage: () => {
        dispatch(push('/setting'));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

import { connect } from 'react-redux';

import Setting from '../components/Setting';
import actions from '../actions/Setting';

const mapStateToProps = (state) => {
  return {...state.setting};
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveSetting(setting) {
      dispatch(actions.update(setting));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);

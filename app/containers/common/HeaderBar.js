import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import HeaderBar from '../../components/common/HeaderBar';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    toMainPage(data) {
      dispatch(push('/'));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);

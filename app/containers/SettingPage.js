import { connect } from 'react-redux';
import Setting from '../components/Setting';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line no-unused-vars
  return {
    saveSetting(formData) {
      dispatch({type: 'saveSetting', payload: {formData}});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);

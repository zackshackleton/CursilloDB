import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators as ActionCreators } from '../actionCreators';

import Layout from '../components/layout/Layout';

const mapStateToProps = (state) => {
  return {
    info: state.infoReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...ActionCreators
    }, dispatch)
  };
};

const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);

export default LayoutContainer;

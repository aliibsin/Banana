import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors,
    formType: 'Sign In',
    navLink: <Link to="/signup">Sign up</Link>,
    message: "Don't have an account? "
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(signin(user)),
    demoLogin: (user) => dispatch(signin(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

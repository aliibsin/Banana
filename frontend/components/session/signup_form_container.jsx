import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors,
    formType: 'Sign Up',
    navLink: <Link to="/signin">Sign In</Link>,
    message: "Already have an account? "
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(signup(user)),
    demoLogin: (user) => dispatch(signin(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

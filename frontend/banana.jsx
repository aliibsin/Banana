import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signin, signout, signup } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store; //temp use to test. remove when done
  window.signup = signup;
  window.signin = signin;
  window.signout = signout;
  ReactDOM.render(<Root store={store} />, root);
})
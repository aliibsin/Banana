import React from 'react';
import { Link } from 'react-router-dom';

const Landing = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="signin-signup">
      <Link to="/signin">Sign in</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalLanding = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalLanding() : sessionLinks();
};


export default Landing;

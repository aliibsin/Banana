import React from 'react';
import { Link } from 'react-router-dom';

const Landing = (props) => {
  
  const sessionLinks = () => (
    <nav className="signin-signup">
      <div>
        <Link to="/signin">Sign in</Link>
      </div>
      <div>
        <Link to="/signup">Try for free</Link>
      </div>
    </nav>
  );
  const personalLanding = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
      <button className="header-button" onClick={props.signout}>Sign Out</button>
    </hgroup>
  );

  return props.currentUser ? personalLanding() : sessionLinks();
};


export default Landing;

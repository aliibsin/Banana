import React from 'react';
import { Link } from 'react-router-dom';


const Landing = (props) => {
  
  const sessionLinks = () => (
    <nav className="landing-nav-bar">
      
      <div className="signin-signup">
        <div className="sign-in-button">
          <Link to="/signin">Sign in</Link>
        </div>
        <div className="sign-up-button">
          <Link to="/signup">Try for free</Link>
        </div>
      </div>
    </nav>
  );
  // const personalLanding = () => (
  //   <hgroup className="header-group">
  //     <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
  //     <button className="header-button" onClick={props.signout}>Sign Out</button>
  //   </hgroup>
  // );

  // return props.currentUser ? personalLanding() : sessionLinks();

  return sessionLinks();
};


export default Landing;

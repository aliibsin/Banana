import React from 'react';
import { Link } from 'react-router-dom';


const Landing = (props) => {
  
  const sessionLinks = () => (
    <div className="home-page">
      <nav className="landing-nav-bar">
        <div className="landing-logo-container"> 
          <Link to="/">
            <img src={window.logo} /> 
          </Link>
        </div>
        <div className="signin-signup">
          <div className="sign-in-button">
            <Link to="/signin">Sign in</Link>
          </div>
          <span id="auth-divider"></span>
          <div className="sign-up-button">
            <Link to="/signup">Try for free</Link>
          </div>
        </div>
      </nav>
      <div className="home-page-proper">
        <div className="home-text-container">
          <div className="home-big-text">
            <h1>Simplify your projects</h1>
            <h1>with Banana</h1>
          </div>
          <div className="home-small-text">
            <p>Banana is the one stop shop for </p>
            <p>all of your project management needs.</p>
          </div>
          <div className="text-sign-up-button">
              <Link to="/signup">Try for free</Link>
            </div>
        </div>
        <div className="home-image">
          <img src={window.teamwork} /> 
        </div>
      </div>
      <footer>
        {/* <i className="fab fa-linkedin"></i> */}

      </footer>
    </div>
  );
  // const personalLanding = () => (
  //   <hgroup className="header-group">
  //     <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
  //     <button className="logout-button" onClick={props.signout}>Sign Out</button>
  //   </hgroup>
  // );

  // return props.currentUser ? personalLanding() : sessionLinks();

  return sessionLinks();
};


export default Landing;

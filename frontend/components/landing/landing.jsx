import React from 'react';
import { Link } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
          <Link to="/signup">
            <div className="sign-up-button">
              Try for free
            </div>
          </Link>
        </div>
      </nav>
      <div className="home-page-proper">
        <div className="home-text-container">
          <div className="home-big-text">
            <h1>Simplify your projects</h1>
            <h1>with Banana.</h1>
          </div>
          <div className="home-page-line">
            <hr />
          </div>
          <div className="home-small-text">
            <p>Banana is the one stop shop for </p>
            <p>all of your project management needs.</p>
          </div>
          <Link to="/signup">
            <div className="text-sign-up-button">
                Try for free
            </div>
          </Link>
        </div>
        <div className="home-image">
          <img src={window.teamwork} /> 
        </div>
      </div>
      <footer className="footer">
        <div>
          <a 
            href="https://www.linkedin.com/in/ali-ibsin-1b9732132" 
            target={"_blank"} 
            rel="noreferrer noopener"
            onClick={(evt) => evt.currentTarget.blur()}
          >
            <div className="splash-external">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </a>
        </div>
        <div>
          <a 
            href="https://github.com/aliibsin/Banana" 
            target={"_blank"} 
            rel="noreferrer noopener"
            onClick={(evt) => evt.currentTarget.blur()}
          >
            <div className="splash-external">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </a>
        </div>
      </footer>
    </div>
  );

  return sessionLinks();
};


export default Landing;

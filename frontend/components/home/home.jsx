import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexContainer from '../projects/project_index_container'

const Home = props => {
  const personalLanding = () => (
    <div className="home-page-full">
      <hgroup className="header-group">
        <h1>Home</h1>
        <div className="header-name">Hi, {props.currentUser.username}!</div>
        <button className="signout-button" onClick={props.signout}>Sign Out</button>
      </hgroup>
      <div className="home-project-container">
        <div>
          <h2>Projects</h2>
          
        </div>
        <ProjectIndexContainer/>
      </div>
    </div>
  );

  return personalLanding();
}


export default Home;
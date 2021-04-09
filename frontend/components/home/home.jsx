import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexContainer from '../projects/project_index_container'

const Home = props => {
  const personalLanding = () => (
    <div>
      <hgroup className="header-group">
        <h1>Home</h1>
        <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
        <button className="logout-button" onClick={props.signout}>Sign Out</button>
      </hgroup>
      <div className="home-project-container">
        <ProjectIndexContainer/>
      </div>
    </div>
  );

  return personalLanding();
}


export default Home;
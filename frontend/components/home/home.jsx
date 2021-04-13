import React from 'react';
import ProjectIndexContainer from '../projects/index/project_index_container'

const Home = props => {
  const personalLanding = () => (
    <div className="home-page-full">
      <hgroup className="header-group">
        <h1>Home</h1>
        <div className="header-name">Hi, {props.currentUser.username}!</div>
        <div className="signout-button" onClick={props.signout}>Sign Out</div>
      </hgroup>
      <div className="home-project-container">
        <div className="home-project-header">
          <h2>Projects</h2>
          <div className="home-project-line">
            <hr />
          </div>
        </div>
        <ProjectIndexContainer />
      </div>
    </div>
  );

  return (
    personalLanding()
  );
}


export default Home;
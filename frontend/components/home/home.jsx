import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexContainer from '../projects/project_index_container'

const Home = props => {
  const personalLanding = () => (
    <div>
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
        <button className="logout-button" onClick={props.signout}>Sign Out</button>
      </hgroup>
      <ProjectIndexContainer/>
    </div>
  );

  return personalLanding();
}


export default Home;
import React from 'react';
import { Link } from 'react-router-dom';


const Home = props => {
  const personalLanding = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
      <button className="logout-button" onClick={props.signout}>Sign Out</button>
    </hgroup>
  );

  return personalLanding();
}


export default Home;
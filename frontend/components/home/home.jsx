import React from 'react';
import ProjectIndexContainer from '../projects/index/project_index_container'
import SidebarContainer from '../sidebar/sidebar_container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page-full">
        <div className="sidebar-expand" onClick={() => this.props.toggleSidebar()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <SidebarContainer />
        <div className="nav-contents">
          <hgroup className="header-group">
            <h1>Home</h1>
            <div className="header-name">Hi, {this.props.currentUser.username}!</div>
            <div className="signout-button" onClick={this.props.signout}>Sign Out</div>
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
      </div>
    )
  }
}


export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faHome, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import SidebarProjectCreate from './sidebar_project_create';

const Sidebar = props => {
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-logo-container">
          <Link to="/home">
            <img src={window.logo} /> 
          </Link>
          <div>
            <div className="sidebar-collapse">
              <FontAwesomeIcon icon={faBars} />
            </div> 
          </div>
        </div>
        <div className="sidebar-main-link">
          <div className="sidebar-main-link-item-cont">
            <Link to="/home">
              <div className="sidebar-main-link-item-cont">
                <span className="sidebar-main-link-item">
                  <FontAwesomeIcon icon={faHome} />
                  &nbsp;
                  Home
                </span>
              </div>
            </Link>
          </div>
          <div className="sidebar-main-link-item-cont"> 
            <span className="sidebar-main-link-item" >
              <FontAwesomeIcon icon={faCheckCircle} />
              &nbsp;
              My Tasks
            </span>
          </div>
        </div>
        <div className="sidebar-proj-links-cont">
          <div className="sidebar-projects-header">
            <span>My Projects</span>
            <div>
              <SidebarProjectCreate errors={props.errors} />
            </div>
          </div>
          <div className="sidebar-proj-links">
            <ul>
              {
                props.projects.map(project => (
                  <Link to={`/home/${project.id}/list`} key={project.id} >
                    <li className="sidebar-proj-items">
                      <span>
                        {project.name}
                      </span>
                    </li>
                  </Link>
                ))
              }   
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const ProjectIndexItem = props => (
  
  <li className="project-list-element">
    <Link to={`/home/${props.project.id}/list`}>
      <div className="project-individual">
        <div className="project-icon">
          <FontAwesomeIcon icon={faTasks} />
        </div>
    
        <div className="home-project-name">
          {props.project.name}
        </div>
      </div>
    </Link>
  </li>
)

export default ProjectIndexItem;
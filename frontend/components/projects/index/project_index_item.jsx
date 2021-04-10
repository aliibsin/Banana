import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const ProjectIndexItem = props => (
  <Link to={`/home/${props.project.id}`}>
    <li className="project-list-element">
    
      <div className="project-individual">
        <div className="project-icon">
          <FontAwesomeIcon icon={faTasks} />
        </div>
    
        <h3 className="home-project-name">
          {props.project.name}
        </h3>
      </div>
   
    </li>
  </Link>
)

export default ProjectIndexItem;
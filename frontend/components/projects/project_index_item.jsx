import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const ProjectIndexItem = props => (
  <li className="project-list-element">
    <Link to={`/home/${props.project.id}`}>
      <div className="project-individual">
        <div className="project-icon">
          <FontAwesomeIcon icon={faTasks} />
        </div>
    
        <h3 className="home-project-name">
          {props.project.name}
        </h3>
      </div>
    </Link>
  </li>
)

export default ProjectIndexItem;
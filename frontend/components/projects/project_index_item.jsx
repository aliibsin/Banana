import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
  <li>
    <div class="project-icon"></div>
    <Link to={`/home/${props.project.id}`}>
      {props.project.name}
    </Link>
  </li>
)

export default ProjectIndexItem;
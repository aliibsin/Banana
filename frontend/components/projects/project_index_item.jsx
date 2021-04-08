import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
  <li>
    {/* <Link to={``}></Link> */}
    {props.project.name}
  </li>
)

export default ProjectIndexItem;
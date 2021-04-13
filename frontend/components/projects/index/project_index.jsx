import React, {useState} from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectCreateModalContainer from '../create/project_create_modal';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    
    return (
      <ul className="project-list-container">
        {
          this.props.projects.map(project => (
            <ProjectIndexItem project={project} key={project.id}/>
          ))
        }
        <ProjectCreateModalContainer errors={this.props.errors}/>
      </ul>
    )
  }
}



export default ProjectIndex;
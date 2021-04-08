import React from 'react';
import ProjectIndexItem from './project_index_item'

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    <div>
      <ul>
        {
          this.props.projects.map(project => (
            <ProjectIndexItem project={project} key={project.id}/>
          ))
        }
      </ul>
    </div>
  }
}



export default ProjectIndex;
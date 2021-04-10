import React, {useState} from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectCreateModalContainer from '../create/project_create_modal';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {

    const openModal = () => {
      this.setState({ showModal: true })
    }

    return (
      <ul className="project-list-container">
        {
          this.props.projects.map(project => (
            <ProjectIndexItem project={project} key={project.id}/>
          ))
        }
        <li>
          <ProjectCreateModalContainer />
        </li>
      </ul>
    )
  }
}



export default ProjectIndex;
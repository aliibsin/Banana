import React from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectCreateModal from './project_create_modal';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {showModal: false};

    
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {

    const openModal = () => {
      if (this.state.showModal === true) {
        this.state.showModal = false;
      } else {
        this.state.showModal = true;
      }
    }

    return (
      <ul className="project-list-container">
        {
          this.props.projects.map(project => (
            <ProjectIndexItem project={project} key={project.id}/>
          ))
        }
        <li>
          <button onClick={openModal()}>
            open model
          </button>
          <ProjectCreateModal showModal={this.state.showModal}/>
        </li>
      </ul>
    )
  }
}



export default ProjectIndex;
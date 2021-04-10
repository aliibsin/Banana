import React from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectCreateModalContainer from './project_create_modal_container';

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
      if (this.state.showModal === true) {
        this.setState({ showModal: false })
      } else {
        this.setState({ showModal: true })
      }

      // this.setState({ showModal: true })
    }
    
    return (
      <ul className="project-list-container">
        {
          this.props.projects.map(project => (
            <ProjectIndexItem project={project} key={project.id}/>
          ))
        }
        <li>
          <div onClick={() => openModal()} className="create-project-button">
            Create Project
          </div>
          <ProjectCreateModalContainer showModal={this.state.showModal}/>
        </li>
      </ul>
    )
  }
}



export default ProjectIndex;
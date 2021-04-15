import React from 'react';
import SectionDisplayContainer from '../../../sections/section_display_container';
import SidebarContainer from '../../../sidebar/sidebar_container';
import Dropdown from '../../delete/project_delete_dd';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.project.name,
      description: this.props.project.description,
    };

    this.descriptionInput = React.createRef();
    this.nameInput = React.createRef();
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDescriptionUpdate = this.handleDescriptionUpdate.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.projectId !== this.props.match.params.projectId) {
      this.setState({
        name: this.props.project.name,
        description: this.props.project.description
      })      
    }
  }

  deleteProj() {
    this.props.deleteProject(this.props.match.params.projectId);
  }

  handleDescriptionChange(e) {
    const editedDescription = e.target.value.replace(/[\t]+/g, '');
    this.setState({ description: editedDescription });
  }

  handleNameChange(e) {
    const editedName = e.target.value.replace(/[\t]+/g, '');
    this.setState({ name: editedName });
  }

  handleDescriptionUpdate() {
    this.props.updateProject({ id: this.props.projectId, description: this.state.description });
  }

  handleNameUpdate() {
    this.props.updateProject({ id: this.props.projectId, name: this.state.name });
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, {
      name: "Untitled Task",
      description: "",
      priority: "",
      due_date: "",
      done: false,
      project_id: this.props.projectId,
      section_id: ""
    });
    this.props.createTask(task);
  }

  render() {
    console.log(this.props)
    return (
      <div className="home-page-full">
        <div className="sidebar-expand" onClick={() => this.props.toggleSidebar()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <SidebarContainer />
        <div className="nav-contents">
          <hgroup className="header-group">
            <div className="header-project-info">
              <div className="project-name-container">
                <Dropdown deleteProject={this.props.deleteProject } projectId={this.props.projectId} />
                <div className="show-project-name-cont">
                  <input
                    type="text"
                    className="show-project-name"
                    onChange={this.handleNameChange}
                    onBlur={this.handleNameUpdate}
                    ref={this.nameInput}
                    value={this.state.name}
                    placeholder="Project Name can't be blank"
                    autoComplete="off" 
                    autoCorrect="off" 
                    autoCapitalize="off"
                    spellCheck="false"
                    
                  />
                </div>
              </div>
              <div className="show-project-desc-cont">
                <input 
                  type="text" 
                  className="show-project-description"
                  onChange={this.handleDescriptionChange}
                  onBlur={this.handleDescriptionUpdate}
                  ref={this.descriptionInput}
                  value={this.state.description}
                  placeholder={"Click to add a description..."}
                  autoComplete="off" 
                  autoCorrect="off" 
                  autoCapitalize="off"
                  spellCheck="false"
                  
                />
              </div>
            </div>
            <div className="signout-button" onClick={this.props.signout}>Sign Out</div>
          </hgroup>
          <div className="section-disp-cont">
            <div>
              <form onSubmit={this.handleSubmit}>
                <input className="create-task-button" type="submit" value='New Task' />
              </form>
            </div>
            <SectionDisplayContainer project_id={this.props.project.id}/>
          </div>
        </div>
      </div>
    )
  }
}


export default ProjectShow;


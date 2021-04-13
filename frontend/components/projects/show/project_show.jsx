import React from 'react';
import { Link } from 'react-router-dom';
import SectionDisplayContainer from '../../sections/section_display_container';
import Dropdown from '../delete/project_delete_dd.js'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';


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

  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
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

  handleDescriptionUpdate(e) {
    const { description: stateDescription } = this.state;
    this.props.updateProject({ id: this.props.projectId, description: stateDescription });
  }

  handleNameUpdate(e) {
    const { name: stateName } = this.state;
    this.props.updateProject({ id: this.props.projectId, name: stateName });
  }

  render() {
    const { description: stateDescription } = this.state;
    const { name: stateName } = this.state;
    
    return (
      <div className="home-page-full">
        <hgroup className="header-group">
          <div className="back-button-container">
            <Link to="/home">
              <div className="back-button">
              <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            </Link>
          </div>
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
                  value={stateName}
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
                value={stateDescription}
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
          <SectionDisplayContainer project_id={this.props.project.id}/>
        </div>
      </div>
    )
  }
}


export default ProjectShow;


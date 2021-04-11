import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';


class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.project.description,
    };

    this.descriptionInput = React.createRef();
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDescriptionUpdate = this.handleDescriptionUpdate.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.description !== this.props.description) {
      this.setState({ description: this.props.description })
    }
  }

  deleteProj() {
    this.props.deleteProject(this.props.match.params.projectId);
  }

  handleDescriptionChange(evt) {
    const editedDescription = evt.target.value.replace(/[\t]+/g, '');
    this.setState({ description: editedDescription });
  }

  handleDescriptionUpdate(evt) {
    const { description: stateDescription } = this.state;
    this.props.updateProject({ id: this.props.projectId, description: stateDescription });
  }

  handleKeyDown(evt) {
    if (evt.key === "Enter" || evt.keyCode === 13) {
      evt.preventDefault();
      this.descriptionInput.current.blur();
    }
  }

  render() {
    const { description: stateDescription } = this.state;
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
              <h1 className="show-project-name">{this.props.project.name}</h1>
              <Link to="/home">
                <div className="delete-project-button" onClick={() => this.deleteProj()}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </Link>
            </div>
            <input type="text" className="show-project-description"
              onChange={this.handleDescriptionChange}
              onBlur={this.handleDescriptionUpdate}
              ref={this.descriptionInput}
              value={stateDescription}
              placeholder={"Click to add a description..."}
            />
          </div>
          <div className="signout-button" onClick={this.props.signout}>Sign Out</div>
        </hgroup>
        <div className="home-project-container">
        </div>
      </div>
    )
  }
}


export default ProjectShow;


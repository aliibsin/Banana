import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  render() {
    
    return (
      // <div>
      //   <h1></h1>
      //   <p>{this.props.project.description}</p>
      // </div>

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
            <h1 className="show-project-name">{this.props.project.name}</h1>
            <p className="show-project-description">{this.props.project.description}</p>
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


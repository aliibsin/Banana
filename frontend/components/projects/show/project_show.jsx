import React from 'react';

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
          <h1>{this.props.project.name}</h1>
          <div className="signout-button" onClick={this.props.signout}>Sign Out</div>
        </hgroup>
        <div className="home-project-container">
        </div>
      </div>
    )
  }
}


export default ProjectShow;


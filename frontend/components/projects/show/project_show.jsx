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
      <div>
        <h1>{this.props.project.name}</h1>
        <p>{this.props.project.description}</p>
      </div>
    )
  }
}


export default ProjectShow;
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
        <h1>{Project.title}</h1>
        <p>{Project.description}</p>
      </div>
    )
  }
}


export default ProjectShow;
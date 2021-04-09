import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = state => {
  return ({
    errors: state.errors,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    createProject: (project) => dispatch(createProject(project))
  })
}

class ProjectCreateModal extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.showModal ? <div> im a modal </div> : null }
      </div>
    );
    
  }
} 


export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreateModal);
import React from 'react';
import { connect } from 'react-redux';
import CreateProjectForm from './project_create_form'
import {createProject} from '../../../actions/project_actions'

const mapStateToProps = (state, ownProps) => {
  return ({
    showModal: ownProps.showModal,
    setShowModal: ownProps.setShowModal,
    errors: state.errors.projectErr,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    createProject: (project) => dispatch(createProject(project))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);
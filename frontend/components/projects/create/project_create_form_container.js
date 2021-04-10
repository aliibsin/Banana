import React from 'react';
import { connect } from 'react-redux';
import ProjectCreateModal from './project_create_form'
import {createProject} from '../../../actions/project_actions'

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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreateModal);
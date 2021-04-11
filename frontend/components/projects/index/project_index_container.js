import { connect } from 'react-redux';

import {fetchProjects, createProject} from '../../../actions/project_actions'
import ProjectIndex from './project_index';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors,
    projects: Object.values(state.entities.projects),
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProjects: () => dispatch(fetchProjects())
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex)
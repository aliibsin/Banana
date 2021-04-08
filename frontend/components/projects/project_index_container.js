import { connect } from 'react-redux';

import {fetchProjects, createProject} from '../../actions/project_actions'
import ProjectIndex from './project_index';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors,
    projects: Object.values(state.projects),
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProjects: () => dispatch(fetchProjects()),
    createProject: (project) => dispatch(createProject(project))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex)
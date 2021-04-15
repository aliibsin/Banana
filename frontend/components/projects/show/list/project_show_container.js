import { connect } from 'react-redux';

import { fetchProject, deleteProject, updateProject } from '../../../../actions/project_actions'
import { signout } from '../../../../actions/session_actions';
import ProjectShow from './project_show';
import { toggleSidebar } from '../../../../actions/sidebar_actions';

const mapStateToProps = (state, ownProps) => {
  const projectId = parseInt(ownProps.match.params.projectId);

  return ({
    sidebarOpen: state.sidebar.sidebarOpen,
    currentUser: state.entities.users[state.session.id],
    errors: state.errors,
    projectId: projectId,
    project: state.entities.projects[projectId]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    deleteProject: projectId => dispatch(deleteProject(projectId)),
    updateProject: project => dispatch(updateProject(project)),
    signout: () => dispatch(signout()),
    toggleSidebar: () => dispatch(toggleSidebar)
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
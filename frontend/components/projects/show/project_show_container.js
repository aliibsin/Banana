import { connect } from 'react-redux';

import { fetchProject } from '../../../actions/project_actions'
import { signout } from '../../../actions/session_actions';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => {
  const projectId = parseInt(ownProps.match.params.projectId);

  return ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors,
    projectId: projectId,
    project: state.entities.projects[projectId]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    signout: () => dispatch(signout)
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
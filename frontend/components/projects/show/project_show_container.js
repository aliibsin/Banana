import { connect } from 'react-redux';

import { fetchProject } from '../../../actions/project_actions'
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => {
  const projectId = parseInt(ownProps.match.params.projectId);

  return ({
    errors: state.errors,
    projectId: projectId,
    project: state.entities.projects[projectId]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
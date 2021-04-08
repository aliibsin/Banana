import { connect } from 'react-redux';

import { fetchProject } from '../../actions/project_actions'
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => {
  projectId = ownProps.match.params.projectId;
  return ({
    errors: state.errors,
    projectId: projectId,
    project: state.projects[projectId]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
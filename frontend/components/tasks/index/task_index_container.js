import { connect } from 'react-redux';
import { signout } from '../../../actions/session_actions';
import {fetchTasks, createTask } from '../../../actions/task_actions';
import TaskIndex from './task_index'

const mapStateToProps = (state) => {
  return ({
    errors: state.errors,
    tasks: Object.values(state.entities.tasks),
    sidebarOpen: state.sidebar.sidebarOpen,
    currentUser: state.entities.users[state.session.id],
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    signout: () => dispatch(signout()),
    fetchTasks: () => dispatch(fetchTasks()),
    createTask: task => dispatch(createTask(task))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex)
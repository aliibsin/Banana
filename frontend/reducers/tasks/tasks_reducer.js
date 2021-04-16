import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK
} from '../../actions/task_actions';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks
    case RECEIVE_TASK:
      const newTask = {[action.task.id]: action.task};
      return Object.assign({}, state, newTask);
    case REMOVE_TASK:
      let newState = Object.assign({}, state);
      delete newState[action.taskId];
      return newState
    default:
      return state;
  }
}

export default tasksReducer;
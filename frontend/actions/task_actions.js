import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";

const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks: tasks
});

const receiveTask = task => ({
  type: RECEIVE_TASK,
  task: task
});

const removeTask = taskId => ({
  type: REMOVE_TASK,
  taskId: taskId
});

const receiveErrors = errs => ({
  type: RECEIVE_TASK_ERRORS,
  errors: {errs}
});

export const fetchTasks = () => dispatch => (
  TaskAPIUtil.fetchTasks().then(tasks => (
    dispatch(receiveTasks(tasks))
  ))
);

export const fetchTask = taskId => dispatch => (
  TaskAPIUtil.fetchTask(taskId).then(task => (
    dispatch(receiveTask(task))
  ))
);

export const createTask = task => dispatch => (
  TaskAPIUtil.createTask(task).then(task => (
    dispatch(receiveTask(task))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateTask = task => dispatch => (
  TaskAPIUtil.updateTask(task).then(task => (
    dispatch(receiveTask(task))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))  
  ))
);

export const deleteTask = taskId => dispatch => (
  TaskAPIUtil.deleteTask(taskId).then(() => (
    dispatch(removeTask(taskId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
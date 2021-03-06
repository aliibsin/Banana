import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";

const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects: projects
});

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project: project
});

const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId: projectId
});

const receiveErrors = errs => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors: {errs}
});


export const fetchProjects = () => dispatch => (
  ProjectAPIUtil.fetchProjects().then(projects => (
    dispatch(receiveProjects(projects))
  ))
);

export const fetchProject = projectId => dispatch => (
  ProjectAPIUtil.fetchProject(projectId).then(project => (
    dispatch(receiveProject(project))
  ))
);

export const createProject = project => dispatch => (
  ProjectAPIUtil.createProject(project).then(project => (
    dispatch(receiveProject(project))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateProject = project => dispatch => (
  ProjectAPIUtil.updateProject(project).then(project => (
    dispatch(receiveProject(project))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))  
  ))
);

export const deleteProject = projectId => dispatch => (
  ProjectAPIUtil.deleteProject(projectId).then(() => (
    dispatch(removeProject(projectId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
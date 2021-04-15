import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import projectsReducer from "./projects/projects_reducer";
import sectionsReducer from "./sections/sections_reducer";
import tasksReducer from "./tasks/tasks_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  sections: sectionsReducer,
  tasks: tasksReducer
});

export default entitiesReducer;
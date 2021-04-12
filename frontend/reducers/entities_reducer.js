import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import projectsReducer from "./projects/projects_reducer"
import sectionsReducer from "./sections/sections_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  sections: sectionsReducer
});

export default entitiesReducer;
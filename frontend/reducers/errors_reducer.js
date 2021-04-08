import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import projectErrorsReducer from './projects/project_errors_reducer'

const errorsReducer = combineReducers({
  sessionErr: sessionErrorsReducer,
  projectErr: projectErrorsReducer
});

export default errorsReducer;
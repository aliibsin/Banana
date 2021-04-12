import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import projectErrorsReducer from './projects/project_errors_reducer'
import sectionErrorsReducer from './sections/section_errors_reducer'

const errorsReducer = combineReducers({
  sessionErr: sessionErrorsReducer,
  projectErr: projectErrorsReducer,
  sectionErr: sectionErrorsReducer
});

export default errorsReducer;
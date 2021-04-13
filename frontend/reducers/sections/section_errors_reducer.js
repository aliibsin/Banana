import {
  RECEIVE_SECTION,
  RECEIVE_SECTION_ERRORS
} from '../../actions/section_actions';

const sectionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_SECTION_ERRORS:
      return action.errors.errs;
    case RECEIVE_SECTION:
      return [];  
    default:
      return state;
  }
}

export default sectionErrorsReducer;
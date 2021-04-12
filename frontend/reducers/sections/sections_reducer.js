import {
  RECEIVE_SECTIONS,
  RECEIVE_SECTION,
  REMOVE_SECTION
} from '../../actions/section_actions';

const sectionsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SECTIONS:
      return action.sections
    case RECEIVE_SECTION:
      const newSection = {[action.section.id]: action.section}
      return Object.assign({}, state, newSection);
    case REMOVE_SECTION:
      let newState = Object.assign({}, state);
      delete newState[action.sectionId];
      return newState;
    default:
      return state;
  }
}

export default sectionsReducer;
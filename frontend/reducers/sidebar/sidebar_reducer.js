import {TOGGLE_SIDEBAR} from '../../actions/sidebar_actions';

const sideBarReducer = (state = {sidebarOpen: true}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, { sidebarOpen: !state.sidebarOpen });
    default:
      return state;
  }
}

export default sideBarReducer;
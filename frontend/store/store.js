import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
}


export default configureStore;
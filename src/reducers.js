
import * as appActions from './actions';

import { combineReducers } from 'redux'

function actors(state = [], action) {
  switch (action.type) {
  case appActions.PUBLISH_ACTORS:
    return action.data;
  default:
    return state;
  }
}

function actions(state = [], action) {
  switch (action.type) {
  case appActions.PUBLISH_ACTIONS:
    return action.data;
  default:
    return state;
  }
}

function items(state = [], action) {
  switch (action.type) {
  case appActions.PUBLISH_ITEMS:
    return action.data;
  default:
    return state;
  }
}

function selected(state = {}, action) {
  switch (action.type) {
  case appActions.SELECTION_CHANGED:
    return action.selected;
  default:
    return state;
  }
}

function hasAuthorization(state = null, action) {
  switch (action.type) {
  case appActions.HAS_AUTHORIZATION:
    return action.hasAuthorization;
  default:
    return state;
  }
}




// The global application state:

const reducers = combineReducers({
  actions,
  actors,
  items,
  selected,
  hasAuthorization
});


export default reducers;

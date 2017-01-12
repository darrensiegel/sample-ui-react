
import { makeActionCreator } from './utils';

export const PUBLISH_ACTORS = 'PUBLISH_ACTORS';
export const PUBLISH_ACTIONS = 'PUBLISH_ACTIONS';
export const PUBLISH_ITEMS = 'PUBLISH_ITEMS';
export const SELECTION_CHANGED = 'SELECTION_CHANGED';
export const HAS_AUTHORIZATION = 'HAS_AUTHORIZATION';

export const publishActors = makeActionCreator(PUBLISH_ACTORS, 'data');
export const publishActions = makeActionCreator(PUBLISH_ACTIONS, 'data');
export const publishItems = makeActionCreator(PUBLISH_ITEMS, 'data');
export const hasAuthorization = makeActionCreator(HAS_AUTHORIZATION, 'hasAuthorization');

export const selectionChanged = makeActionCreator(SELECTION_CHANGED, 'selected');

export const changeSelection = function(selected) {
  return function(dispatch) {
    dispatch(selectionChanged(selected));

    if (selected.action && selected.actor && selected.item) {
      dispatch(hasAuthorization(null));

      fetch('http://gateway:8081/api/authRequest?actor=' + selected.actor + '&action=' + selected.action + '&item=' + selected.item)
        .then(response => response.json())
        .then(response => dispatch(hasAuthorization(response.hasAuthorization)));
    }
  }
}

export const requestData = function(baseUrl) {
  return function(dispatch) {

    fetch(baseUrl + '/api/data/getActors')
      .then(response => response.json())
      .then(response => dispatch(publishActors(response.rows)));

    fetch(baseUrl + '/api/data/getActions')
      .then(response => response.json())
      .then(response => dispatch(publishActions(response.rows)));

    fetch(baseUrl + '/api/data/getItems')
      .then(response => response.json())
      .then(response => dispatch(publishItems(response.rows)));

  }
}

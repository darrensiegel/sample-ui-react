
'use strict';

/**
* @function
* @name makeActionCreator
*
* @param ...argNames - the key for each property to be added to action
* @returns {object} action - This is the action to be used in the reducers, which
* contains at least type which is what is used to determine which case is fired
* in the reducers
* @desc This is an action creator factory for simple synchronous actions
*/
export function makeActionCreator(type, ...argNames) {
  return function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  }
}


/**
* @function
* @name generateId
*
* @returns {number} A random number between 0 and 99999
* @des This function generates a random number to be used as an ID.
*/
export function generateId() {
  var random = Math.random() * 100000 + "";
  return parseInt(random);
}

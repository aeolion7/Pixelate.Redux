import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const initialState = {};

// ACTION TYPES
/* we'll add some action types soon */

// ACTION CREATORS
/* we'll also add the corresponding action creators */

// And we'll revisit this reducer.
function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;

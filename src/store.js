import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const initialState = {
  grid: [Array(20).fill('')]
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

// ACTION TYPES
const ADD_ROW = 'ADD_ROW';

// ACTION CREATORS
export const addRow = () => ({ type: ADD_ROW });

// And we'll revisit this reducer.
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      const numCols = state.grid[0].length;
      const newRow = Array(numCols).fill('');


      return { ...state, grid: [...state.grid, newRow]};
    default:
      return state;
  }
}

export default store;

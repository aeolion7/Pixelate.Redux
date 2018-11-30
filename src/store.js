import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const initialState = {
  grid: [Array(20).fill('')],
  selectedColor: 'red'
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

// ACTION TYPES
const ADD_ROW = 'ADD_ROW';
const PICK_COLOR = 'PICK_COLOR';
const DRAW = 'DRAW';

// ACTION CREATORS
export const addRow = () => ({ type: ADD_ROW });
export const pickColor = (color) => ({ type: PICK_COLOR, color});
export const draw = (row, col) => ({ type: DRAW, row, col})

// And we'll revisit this reducer.
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      const numCols = state.grid[0].length;
      const newRow = Array(numCols).fill('');
      return { ...state, grid: [...state.grid, newRow]};
    case PICK_COLOR:
      return {...state, selectedColor: action.color};
    case DRAW:
      const gridCopy = state.grid.slice();
      gridCopy[action.row][action.col] = state.selectedColor;
      return {...state, grid: gridCopy};
    default:
      return state;
  }
}

export default store;

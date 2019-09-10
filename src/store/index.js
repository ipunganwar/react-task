import { createStore } from 'redux';

const initialState = {
  results: 0,
  operations: '',
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHANGE_VALUE':
      return {
        ...state,
        operations: action.payload,
      };
    case 'SET_OPERATIONS':
      return {
        ...state,
        operations: state.operations.concat(action.payload),
      };
    case 'SET_RESULT':
      return {
        ...state,
        results: action.payload,
      };
    case 'SET_CLEAR':
      return initialState;
    default:
      return state;
  }
};
const store = createStore(createReducer);

export default store;

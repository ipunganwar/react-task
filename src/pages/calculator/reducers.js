export const setOperations = (value) => ({
  type: 'SET_OPERATIONS',
  payload: value,
});

export const setChangeValue = (value) => ({
  type: 'SET_CHANGE_VALUE',
  payload: value,
});

export const sumInput = (result) => ({
  type: 'SET_RESULT',
  payload: result,
});

export const setClear = () => ({
  type: 'SET_CLEAR',
});

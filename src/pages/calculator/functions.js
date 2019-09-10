import { OPERATIONS_VALUE, REGEX } from './constant';

export const setNumber = (num) => ({
  type: 'SET_OPERATIONS',
  payload: num,
});

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

export const checkSymbol = (num) => {
  const number = num.split('');
  return OPERATIONS_VALUE.includes(number[number.length - 1]);
};

export const checkChangeOperation = (operation, num) => {
  const number = num.split('');
  const checkOperation = OPERATIONS_VALUE.includes(number[number.length - 2]);
  return number[number.length - 1] !== operation && !checkOperation;
};

export const checkDotInLastIndex = (value) => value[value.indexOf('.')] === value[value.length - 1];

export const checkDot = (value) => {
  const filterValue = value.split(REGEX);
  return filterValue[filterValue.length - 1].includes('.');
};

export const validateDigitOperation = (value) => {
  const isGetSymbol = checkSymbol(value);
  return isGetSymbol ? value.substring(0, value.length - 1) : value;
};

export const splitByOperation = (value) => value.split(REGEX);

export const removeZeroIndexOne = (value) => {
  const splitValue = value.split(REGEX);
  const indexValue = +splitValue[splitValue.length - 1];
  const parameterSlice = value.length - splitValue[splitValue.length - 1].length;
  const result = value.slice(0, parameterSlice).concat(indexValue);

  return result;
};

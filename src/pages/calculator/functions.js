import { OPERATIONS_VALUE, REGEX } from './constant';

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

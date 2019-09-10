/* eslint-disable no-eval */
import { connect } from 'react-redux';
import Calculator from './units';
import {
  sumInput,
  setClear,
  setChangeValue,
  setOperations,
  checkSymbol,
  checkChangeOperation,
  checkDotInLastIndex,
  validateDigitOperation,
  checkDot,
  splitByOperation,
  removeZeroIndexOne,
} from './functions';

function mapStateToProps(props) {
  return props;
}
function mapDispatchToProps(dispatch) {
  return {
    handleDigits: (num, value) => {
      const addToValue = value.concat(num);
      const cleaningValue = removeZeroIndexOne(addToValue);

      dispatch(setChangeValue(cleaningValue));
    },
    handleOperations: (operation, num) => {
      const isGetSymbol = checkSymbol(num);
      const isChangeOperation = checkChangeOperation(operation, num);

      if (num.length > 0 && !isGetSymbol) {
        dispatch(setOperations(operation));
      } else if (num.length > 0 && isChangeOperation) {
        const value = num.split('');
        value.splice(value.length - 1, 1, operation);
        dispatch(setChangeValue(value.join('')));
      }
    },
    handleResult: (num) => {
      const validateDigits = validateDigitOperation(num);

      const sum = eval(validateDigits);
      dispatch(sumInput(sum));
    },
    handleClear: () => {
      dispatch(setClear());
    },
    handlePercentage: (num) => {
      const validateDigits = validateDigitOperation(num);
      const splitValue = splitByOperation(validateDigits);

      const sum = +splitValue[splitValue.length - 1] / 100;
      const parameterSlice = validateDigits.length - splitValue[splitValue.length - 1].length;
      const result = validateDigits.slice(0, parameterSlice).concat(sum);
      dispatch(setChangeValue(result));
    },
    handleNegation: (num) => {
      const validateDigits = validateDigitOperation(num);
      const splitValue = splitByOperation(validateDigits);

      const negation = +splitValue[splitValue.length - 1] * -1;
      splitValue.splice(splitValue.length - 1, 1, negation.toString());

      dispatch(setChangeValue(splitValue.join('')));
    },
    handleDot: (num) => {
      const validateDigits = validateDigitOperation(num);
      const isDotLastIndex = checkDotInLastIndex(validateDigits);
      const isThereAnotherDot = checkDot(validateDigits);

      if (!isDotLastIndex && !isThereAnotherDot) {
        const splitValue = splitByOperation(validateDigits);
        const addDot = splitValue[splitValue.length - 1].concat('.');
        const parameterSlice = validateDigits.length - splitValue[splitValue.length - 1].length;
        const result = validateDigits.slice(0, parameterSlice).concat(addDot);
        dispatch(setChangeValue(result));
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

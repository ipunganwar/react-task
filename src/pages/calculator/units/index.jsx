/* eslint-disable no-extra-boolean-cast */
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

const Calculator = (props) => {
  const {
    results,
    operations,
    handleResult,
    handleDigits,
    handleOperations,
    handleClear,
    handlePercentage,
    handleNegation,
    handleDot,
  } = props;

  const displayDigit = operations.length <= 0 ? 0 : operations;

  return (
    <>
      <div className="App">
        <div className="display-input">
          <p className="result">{displayDigit}</p>
        </div>
        <div className="display-result">
          <p>=</p>
          <p className="result">{results}</p>
        </div>
        <div className="display-keys">
          <button type="button" name="digit" onClick={() => handleClear()}>C L E A R</button>
          <button type="button" name="operation" onClick={() => handleOperations('/', operations)}><span>&#247;</span></button>
          <button type="button" name="operation" onClick={() => handleOperations('*', operations)}>x</button>
          <button type="button" name="digit" onClick={() => handleDigits(1, operations)} onKeyPress={() => handleDigits(1)}>1</button>
          <button type="button" name="digit" onClick={() => handleDigits(2, operations)} onKeyPress={() => handleDigits(2)}>2</button>
          <button type="button" name="digit" onClick={() => handleDigits(3, operations)} onKeyPress={() => handleDigits(3)}>3</button>
          <button type="button" name="operation" onClick={() => handleOperations('+', operations)}>+</button>
          <button type="button" name="digit" onClick={() => handleDigits(4, operations)} onKeyPress={() => handleDigits(4)}>4</button>
          <button type="button" name="digit" onClick={() => handleDigits(5, operations)} onKeyPress={() => handleDigits(5)}>5</button>
          <button type="button" name="digit" onClick={() => handleDigits(6, operations)} onKeyPress={() => handleDigits(6)}>6</button>
          <button type="button" name="operation" onClick={() => handleOperations('-', operations)}>-</button>
          <button type="button" name="digit" onClick={() => handleDigits(7, operations)} onKeyPress={() => handleDigits(7)}>7</button>
          <button type="button" name="digit" onClick={() => handleDigits(8, operations)} onKeyPress={() => handleDigits(8)}>8</button>
          <button type="button" name="digit" onClick={() => handleDigits(9, operations)} onKeyPress={() => handleDigits(9)}>9</button>
          <button type="button" name="operation" onClick={() => handlePercentage(operations || '0')}>%</button>
          <button type="button" name="operation" onClick={() => handleNegation(operations)}>-/+</button>
          <button type="button" name="digit" onClick={() => handleDigits(0, operations)} onKeyPress={() => handleDigits(0)}>0</button>
          <button type="button" name="operation" onClick={() => handleDot(operations || '0')}>.</button>
          <button type="button" name="operation" onClick={() => handleResult(operations || '0')}>=</button>
        </div>
      </div>
    </>
  );
};

Calculator.propTypes = {
  handleDigits: PropTypes.func.isRequired,
  handleOperations: PropTypes.func.isRequired,
  results: PropTypes.number.isRequired,
  operations: PropTypes.string.isRequired,
  handleResult: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handlePercentage: PropTypes.func.isRequired,
  handleNegation: PropTypes.func.isRequired,
  handleDot: PropTypes.func.isRequired,
};

export default Calculator;

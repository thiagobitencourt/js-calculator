import './App.css';
import Display from './components/Display';
import Numbers from './components/Numbers';
import Actions from './components/Actions';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [isInvalid, setInvalid] = useState(false);

  function evaluateExpression() {
    if (!isInvalid) {
      try {
        setCurrentValue(eval(currentValue));
      } catch (e) {
        setCurrentValue('Invalid expression');
        setInvalid(true);
      }
    } else {
      setCurrentValue('0');
      setInvalid(false);
    }
  }

  function updateExpression(value) {
    let updatedExpression = value;
    if (isInvalid) {
      setInvalid(false);
    } else {
      // Does not allow two consecutive operator, except for negative sign
      const operations = ['+', '*', '/', '-'];
      const lastChar = currentValue[currentValue.length - 1];
      const removeLastOperation = operations.includes(value) && operations.includes(lastChar) && value !== '-';
      const lastOperationsIsSub = lastChar === '-';

      if (currentValue === '0' && value !== '.') {
        updatedExpression = value;
      } else {
        updatedExpression = (removeLastOperation ? currentValue.slice(0, lastOperationsIsSub ? -2 : -1) : currentValue) + value;
      }
    }

    const values = updatedExpression.split(/[/+*-]/);
    const last = values[values.length - 1];

    // Does not allow tow or more dots (.) per number
    if (last.split('.').length <= 2) {
      setCurrentValue(updatedExpression);
    }
  }

  return (
    <div className="calculator">
      <div className="display-panel">
        <Display current={currentValue} />
        <Button id="equals" primary={true} label="=" click={evaluateExpression}/>
      </div>
      <div className="numbers-panel">
        <Numbers clear={() => setCurrentValue('0')} newValue={updateExpression} />
        <Actions operation={updateExpression} />
      </div>
      <div className="credicts">
        Developed by 
        <a href="https://github.com/thiagobitencourt/js-calculator" target="_blank" rel="noreferrer">
          Thiago Bitencourt
        </a>
      </div>
    </div>
  );
}

export default App;

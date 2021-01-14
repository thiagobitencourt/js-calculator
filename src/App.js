import './App.css';
import Display from './components/Display';
import Numbers from './components/Numbers';
import Actions from './components/Actions';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [isInvalid, setInvalid] = useState(false);

  function evaluateExpression() {
    if (!isInvalid) {
      try {
        setPreviousValue(currentValue);
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
      if (currentValue === '0' && value !== '.') {
        updatedExpression = value;
      } else {
        if (value !== '.' || currentValue[currentValue.length - 1] !== '.') {
          updatedExpression = currentValue + value;
        }
      }
    }

    setCurrentValue(updatedExpression);
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
    </div>
  );
}

export default App;

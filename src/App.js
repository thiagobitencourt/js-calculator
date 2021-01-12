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
    if (isInvalid) {
      setInvalid(false);
    }

    if (currentValue === '0' && value !== '.') {
      setCurrentValue(value);
    } else {
      setCurrentValue(currentValue + value);
    }
  }

  return (
    <div className="calculator">
      <div>
        <Display previous={previousValue} current={currentValue} />
        <Button id="equals" label="=" click={evaluateExpression}/>
      </div>
      <div>
        <Numbers clear={() => setCurrentValue('0')} newValue={updateExpression} />
        <Actions operation={updateExpression} />
      </div>
    </div>
  );
}

export default App;

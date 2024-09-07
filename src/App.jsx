import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');

  }
  const handleAddNumber = (number) => {
    
    if(number == '.'){
      setCurrentNumber(prev => `${prev === '0' ? '0.' : prev}`)
    }else{
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
    }
  }

  const handleSumNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleMinusNumber = () => {

    if(currentNumber === '0'){
      setCurrentNumber('-');
      setOperation('-');
    }
    else if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleMultiplyNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleDivideNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleEquals = () => {

    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case '*':
          handleMultiplyNumber();
          break;
        case '/':
          handleDivideNumber();
          break;
        default:
          break;
      }
    }
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultiplyNumber} />
          <Button label="/" onClick={handleDivideNumber} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="<x]" onClick={() => handleAddNumber(' ')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumber} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumber} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="," onClick={() => handleAddNumber('.')} />
        </Row>


      </Content>
    </Container>
  )
}

export default App;

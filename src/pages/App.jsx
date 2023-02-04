import { useState } from 'react'

import { Percent, Divide, X, Minus, Plus, PlusMinus, Equals } from 'phosphor-react'

import { Container } from './styles'

import { Button } from '../components/Button'

export function App() {
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  function clearUpperDisplay() {
    setCalc('')
  }

  function clearDisplay () {
    setResult('')
    setCalc('')
  }

  function updateDisplay (value) {
    setCalc(calc + value)
  }

  function calculate () {
    try {
      setResult(eval(calc).toString().slice(0, 10))
      setCalc('')
    } catch {
      setCalc('Erro')
      return
    }
  }

  function plusMinus() {
    setResult(-result)
  }

  function percentage() {
    setResult((result) / 100)
  }

  return (
    <Container>
      <div className="calculator">
        <div className="screen">
          <div className="screen-top">
            {calc || '0'}
          </div>
          <div className="screen-bottom">
            <p>=</p>
            <span>{result || '0'}</span>
          </div>
        </div>
        <div className="buttons">
          <Button
            title='CE'
            onClick={() => clearDisplay()}
          />
          <Button
            title='C'
            onClick={() => clearUpperDisplay()}
          />
          <Button
            icon={Percent}
            onClick={() => percentage()}
          />
          <Button
            className='operator'
            icon={Divide}
            onClick={() => updateDisplay('/')}
          />
          <Button
            title={7}
            onClick={() => updateDisplay('7')}
          />
          <Button
            title={8}
            onClick={() => updateDisplay('8')}
          />
          <Button
            title={9}
            onClick={() => updateDisplay('9')}
          />
          <Button
            className='operator'
            icon={X}
            onClick={() => updateDisplay('*')}
          />
          <Button
            title={4}
            onClick={() => updateDisplay('4')}
          />
          <Button
            title={5}
            onClick={() => updateDisplay('5')}
          />
          <Button
            title={6}
            onClick={() => updateDisplay('6')}
          />
          <Button
            className='operator'
            icon={Minus}
            onClick={() => updateDisplay('-')}
          />
          <Button
            title={1}
            onClick={() => updateDisplay('1')}
          />
          <Button
            title={2}
            onClick={() => updateDisplay('2')}
          />
          <Button
            title={3}
            onClick={() => updateDisplay('3')}
          />
          <Button
            className='operator'
            icon={Plus}
            onClick={() => updateDisplay('+')}
          />
          <Button
            icon={PlusMinus}
            onClick={() => plusMinus()}
          />
          <Button
            title={0}
            onClick={() => updateDisplay('0')}
          />
          <Button
            title='.'
            onClick={() => updateDisplay('.')}
          />
          <Button
            className='equal'
            icon={Equals}
            onClick={calculate}
          />
        </div>
      </div>
    </Container>
  )
}
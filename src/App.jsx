import { useState } from 'react'
import { usePricesAPI } from './Hooks/usePricesAPI'
import changeIcon from './assets/sync-outline.svg'
import { Price } from './components/Price'


function App() {
  const [ usdToArs, setUsdToArs ] = useState('ARS')
  const [ userInput, setUserInput ] = useState('')
  const { prices } = usePricesAPI()
  

  const handleUserInput = (e) => {
      const newValue = e.target.value
      setUserInput(newValue)
  }

  const handleUsdToArs = () => {
    if (usdToArs === 'ARS') {
      setUsdToArs('USD / EUR')
    } else {
      setUsdToArs('ARS')
    }
  }

  const handlePrice = (price) => {
    if (usdToArs === 'ARS') {
      return (
        userInput * price
      )
    } else {
      return (
        userInput / price
      )
    }
  }

  return (
    <main>
      <div className="app_container">
        <form className="currency_container">
          
          <input
              id='valueInput'
              min="0"
              type="number"
              className="currency_value"
              placeholder="0"
              autoFocus
              value={userInput}
              onChange={handleUserInput}
          />
          <label htmlFor="valueInput" className="currency_type currency_type-container">{usdToArs === 'ARS' ? 'USD / EUR' : 'ARS'}</label>
        </form>
          <ul>
            {prices ? 
            prices.map((price) => (
              <Price key={price.label} pClass={price.class} label={price.label} value={price.value} userInput={userInput} usdToArs={usdToArs} handlePrice={handlePrice} />
            )) 
            : 
            <>
              <li className='loading'></li>
              <li className='loading'></li>
              <li className='loading'></li>
              <li className='loading'></li>
              <li className='loading'></li>
            </>}
          </ul>
      </div>
      <button onClick={() => handleUsdToArs()} id="change_mode">
        <img id="change_icon" src={changeIcon} alt="Button to swap between USD to ARS and ARS to USD" />
      </button>
    </main>
  )
}

export default App

import React, { useState } from 'react';
import Proportion from './components/Proportion';
import Currency from './components/Currency';
import './app.scss';

const initialState = [
  {
    id: 1,
    name: 'BTC',
    proportion: 40,
    color: 'orange',
    lock: true
  },
  {
    id: 2,
    name: 'ETH',
    proportion: 20,
    color: 'blue',
    lock: false
  },
  {
    id: 3,
    name: 'XRP',
    proportion: 20,
    color: 'black',
    lock: false
  },
  {
    id: 4,
    name: 'BNB',
    proportion: 20,
    color: 'yellow',
    lock: false
  }
];

const App = () => {
  const [currencies, setСurrencies] = useState(initialState);
  const [select, setSelect] = useState(null);

  const addCurrency = () => {
    if (select) {
      setСurrencies([
        ...currencies,
        {
          id: currencies[currencies.length - 1].id + 1,
          name: select,
          proportion: 20,
          color: null,
          lock: false
        }
      ]);
    }
  };

  const handleSelectChange = e => {
    setSelect(e.target.value);
  };

  return (
    <div className="app">
      <div className="app__title">Portfolio constructor</div>
      <div className="app__proportions">
        {currencies.map(currency => (
          <Proportion key={currency.id} proportion={currency.proportion} color={currency.color} />
        ))}
      </div>
      <div className="app__currency-list">
        {currencies.map(currency => (
          <Currency
            key={currency.id}
            id={currency.id}
            name={currency.name}
            proportion={currency.proportion}
            color={currency.color}
            lock={currency.lock}
            setСurrencies={setСurrencies}
            currencies={currencies}
          />
        ))}

        {!currencies.length && <div>Нет валют, добавьте что нибудь.</div>}
      </div>
      <div className="app__add">
        <div className="app__select">
          <select onChange={handleSelectChange}>
            <option value="">---</option>
            <option value="XMR">XMR</option>
            <option value="DDR">DDR</option>
            <option value="ZMR">ZMR</option>
            <option value="OPT">XMR</option>
          </select>
        </div>
        <button onClick={addCurrency}>+</button>
      </div>
    </div>
  );
};

export default App;

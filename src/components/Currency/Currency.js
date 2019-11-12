import React from 'react';
import Slider from 'rc-slider';
import { ReactComponent as LockClose } from '../../assets/svg/lock-close.svg';
import { ReactComponent as LockOpen } from '../../assets/svg/lock-open.svg';
import { ReactComponent as Close } from '../../assets/svg/close.svg';

// const Handle = Slider.Handle;

const Currency = ({ id, name, color, proportion, lock, currencies, setСurrencies }) => {
  const handleChangeLock = id => {
    const list = currencies.map(currency => {
      if (currency.id === id) {
        return {
          ...currency,
          lock: !currency.lock
        };
      }

      return currency;
    });

    setСurrencies(list);
  };

  const handleDeleteItem = id => {
    const filtered = currencies.filter(currency => currency.id !== id);

    setСurrencies(filtered);
  };

  const handleChange = (value, id) => {
    const lockedCurrencies = currencies.filter(currency => currency.lock);
    const unlockedCurrencies = currencies.filter(currency => !currency.lock);
    // const unlockedPercent = unlockedCurrencies.reduce((acc, item) => {
    //   return acc + item.proportion;
    // }, 0);

    const updateProportion = unlockedCurrencies.map(currency => ({
      ...currency,
      proportion: value
    }));

    const sortById = [...lockedCurrencies, ...updateProportion].sort((a, b) => a.id - b.id);

    setСurrencies(sortById);
  };

  return (
    <div className={`currency theme-${color}`}>
      <div className="currency__info">
        <div className="currency__name">{name}</div>
        <div className="currency__proportion">
          <span>{proportion}%</span>
          <span onClick={() => handleChangeLock(id)}>
            {lock ? <LockClose width="14" height="14" /> : <LockOpen width="14" height="14" />}
          </span>
        </div>
        <div className="currency__close">
          <Close width="14" height="14" onClick={() => handleDeleteItem(id)} />
        </div>
      </div>
      <Slider
        defaultValue={proportion}
        onChange={value => handleChange(value, id)}
        step={0.1}
        max={100}
        disabled={lock}
        value={proportion}
      />
    </div>
  );
};

export default Currency;

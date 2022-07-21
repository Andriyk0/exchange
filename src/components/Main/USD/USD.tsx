import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { getExchange } from '../../../store/selectors';
import './USD.scss';

export const USD: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [sum, setSum] = useState<number>();
  const exchange = useSelector(getExchange);

  const exportInUSD = () => {
    setSum((inputValue / exchange.UAH) * exchange.USD);
  };

  return (
    <div className="usd">
      <p className="usd__title">Exchange UAH to USD</p>
      <input
        className="usd__input input is-primary"
        type="number"
        value={inputValue}
        onKeyDown={e => e.key === 'Enter' && (exportInUSD())}
        onChange={(event) => {
          setInputValue(+event.target.value);
        }}
      />
      <button
        className={classnames('usd__button button is-primary', { 'is-danger': inputValue === 0 })}
        type="button"
        onClick={exportInUSD}
      >
        {inputValue !== 0 ? 'Exchange' : 'Write sum in input'}
      </button>
      <p className="usd__total">{sum?.toFixed(2)}</p>
    </div>
  );
};

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { getExchange } from '../../../store/selectors';
import './EUR.scss';

export const EUR: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [sum, setSum] = useState<number>();
  const exchange = useSelector(getExchange);

  const exportInEUR = () => {
    setSum((inputValue / exchange.UAH));
  };

  return (
    <div className="eur">
      <p className="eur__title">Exchange UAH to EUR</p>
      <input
        className="eur__input input is-primary"
        type="number"
        value={inputValue}
        onKeyDown={e => e.key === 'Enter' && (exportInEUR())}
        onChange={(event) => {
          setInputValue(+event.target.value);
        }}
      />
      <button
        className={classnames('eur__button button is-primary', { 'is-danger': inputValue === 0 })}
        type="button"
        onClick={exportInEUR}
      >
        {inputValue !== 0 ? 'Exchange' : 'Write sum in input'}
      </button>
      <p className="eur__total">{sum?.toFixed(2)}</p>
    </div>
  );
};

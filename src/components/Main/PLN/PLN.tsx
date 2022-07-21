import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { getExchange } from '../../../store/selectors';
import './PLN.scss';

export const PLN: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [sum, setSum] = useState<number>();
  const exchange = useSelector(getExchange);

  const exportInPLN = () => {
    setSum((inputValue / exchange.UAH) * exchange.PLN);
  };

  return (
    <div className="pln">
      <p className="pln__title">Exchange UAH to PLN</p>
      <input
        className="pln__input input is-primary"
        type="number"
        value={inputValue}
        onKeyDown={e => e.key === 'Enter' && (exportInPLN())}
        onChange={(event) => {
          setInputValue(+event.target.value);
        }}
      />
      <button
        className={classnames('pln__button button is-primary', { 'is-danger': inputValue === 0 })}
        type="button"
        onClick={exportInPLN}
      >
        {inputValue !== 0 ? 'Exchange' : 'Write sum in input'}
      </button>
      <p className="pln__total">{sum?.toFixed(2)}</p>
    </div>
  );
};

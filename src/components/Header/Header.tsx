/* eslint-disable jsx-a11y/tabindex-no-positive */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className="exchange">
      <Link className="exchange__link" to="usd">USD</Link>
      <Link className="exchange__link" to="eur">EUR</Link>
      <Link className="exchange__link" to="pln">PLN</Link>
    </div>
  );
};

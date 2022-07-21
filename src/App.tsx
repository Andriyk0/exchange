/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getData } from './api/api';
import './App.scss';
import { Header } from './components/Header';
import { EUR } from './components/Main/EUR';
import { Home } from './components/Main/Home';
import { PLN } from './components/Main/PLN';
import { USD } from './components/Main/USD';
import { setExchange } from './store';
import { getExchange } from './store/selectors';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const exchange = useSelector(getExchange);

  useEffect(() => {
    const loadDataFromServer = async () => {
      try {
        const response = await getData();

        dispatch(setExchange(response.rates));
      } catch (error) {
        alert('Error try again');
      }
    };

    loadDataFromServer();
  }, []);

  return (
    <>
      <Header />
      { !exchange && (
        <p>Loading...</p>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="usd" element={<USD />} />
        <Route path="pln" element={<PLN />} />
        <Route path="eur" element={<EUR />} />
      </Routes>
    </>
  );
};

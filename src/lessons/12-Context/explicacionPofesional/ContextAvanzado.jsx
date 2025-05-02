import React from 'react';
import { Home } from './components/Home';
import { ContextProvider } from './context/ContextProvider';

export const ContextAvanzado = () => {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
};

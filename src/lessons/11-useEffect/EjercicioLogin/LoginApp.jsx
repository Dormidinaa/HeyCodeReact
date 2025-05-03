import React from 'react';
import { Home } from './components/home';
import { ContextProvider } from './context/ContextProvider';

export const LoginApp = () => {
  return (
    <>
      <ContextProvider>
        <Home />
      </ContextProvider>
    </>
  );
};

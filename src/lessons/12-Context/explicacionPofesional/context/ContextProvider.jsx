import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  //Este componente tiene responsabilidad de manejar el estado global context
  const [user, setUser] = useState();

  console.log('User en el contexto', user);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

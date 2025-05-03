import React, { createContext, useState } from 'react';
const AppContext = createContext();

const initialValue = {
  name: '',
  password: '',
};

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [register, setRegister] = useState(initialValue);

  return (
    <AppContext.Provider
      value={{ user, setUser, register, setRegister, initialValue }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

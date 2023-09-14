import { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [ loggedIn, setLoggedIn ] = useState(false)
  const [successfulLoginData, setSuccessfulLoginData] = useState(null);

  const login = (data) => {
    setSuccessfulLoginData(data);
    setLoggedIn(true)
  };

  return (
    <UserContext.Provider value={{ successfulLoginData, loggedIn, setLoggedIn, login }}>
      {children}
    </UserContext.Provider>
  );
};

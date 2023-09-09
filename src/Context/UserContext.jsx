import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(null);

useEffect(() => {
  if (!newUser) {
    axios
      .get('http://localhost:4000/users/profile')
      .then((response) => {
        console.log("Response from backend", response);
        setNewUser(response.data.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}, []);

  

  return (
    <UserContext.Provider value={{ newUser, setNewUser }}>
      {children}
    </UserContext.Provider>
  );
};

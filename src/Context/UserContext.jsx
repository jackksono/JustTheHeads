import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(false);

  const login = async () => {
    await setNewUser(true)
    console.log('this login function ran')
  }

  useEffect(() => {
    console.log(newUser); // This will log the updated value when it changes.
  }, [newUser]);

useEffect(() => {
  if (newUser) {
    axios
      .get('http://localhost:4000/users/profile')
      .then((response) => {
        console.log("Response from backend", response);
        setNewUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}, [newUser]);

  

  return (
    <UserContext.Provider value={{ newUser, setNewUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

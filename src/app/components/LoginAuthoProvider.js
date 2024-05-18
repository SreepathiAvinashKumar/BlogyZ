import React, { createContext, useState } from 'react';

// Create a context for managing login/logout status
const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(accountStatus);

  const accountStatus= ()=>{
    try {
        account().get();
        return true;
      } catch (error) {
        return false;
      }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, accountStatus }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthProvider, AuthContext };

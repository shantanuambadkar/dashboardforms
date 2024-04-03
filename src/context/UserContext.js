// UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for the user object
const UserContext = createContext();

// Create a context provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [useCounts, setCounts] = useState(null);
  const [DBList, setDBList] = useState(null);

  return (
    <UserContext.Provider
      value={{ user, setUser, useCounts, setCounts, DBList, setDBList }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access user context
export const useUser = () => useContext(UserContext);

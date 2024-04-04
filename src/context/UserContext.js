// UserContext.js
import React, { createContext, useState, useContext } from 'react';
import PassFormNamesInAPI from '../components/formComponents/reusableComponents/PassFormNamesInAPI';
import GetDateFromPeriod from '../components/formComponents/reusableComponents/GetDateFromPeriod';

// Create a context for the user object
const UserContext = createContext();

// Create a context provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [useCounts, setCounts] = useState(null);
  const [DBList, setDBList] = useState(null);
  const [DBCountWidgetButton, setDBCountWidgetButton] = useState('open');
  const [DBPageNo, setDBPageNo] = useState(0);
  const [DBPeriod, setDBPeriod] = useState(GetDateFromPeriod('THIS MONTH'));
  const [formName, setFormName] = useState(PassFormNamesInAPI(''));
  const [DBPeriodVal, setDBPeriodVal] = useState('THIS MONTH');
  const [DBBranchVal, setDBBranchVal] = useState('all');

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        useCounts,
        setCounts,
        DBList,
        setDBList,
        formName,
        setFormName,
        DBCountWidgetButton,
        setDBCountWidgetButton,
        DBPageNo,
        setDBPageNo,
        DBPeriod,
        setDBPeriod,
        DBPeriodVal,
        setDBPeriodVal,
        DBBranchVal,
        setDBBranchVal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access user context
export const useUser = () => useContext(UserContext);

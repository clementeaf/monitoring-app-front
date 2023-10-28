/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import useCommitsQuery from '../hooks/useCommitsQuery';

const CommitsInfoContext = createContext();

export const useCommitsInfoStore = () => {
  return useContext(CommitsInfoContext);
};

export const CommitsInfoProvider = ({ children }) => {
  const commitsInfoQuery = useCommitsQuery();

  return (
    <CommitsInfoContext.Provider value={commitsInfoQuery}>
      {children}
    </CommitsInfoContext.Provider>
  );
};

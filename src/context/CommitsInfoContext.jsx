/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import useCommitsQuery from '../hooks/useCommitsQuery';

const CommitsInfoContext = createContext();

export const useCommitsInfoStore = () => useContext(CommitsInfoContext);

export function CommitsInfoProvider({ children }) {
  const commitsInfoQuery = useCommitsQuery();

  return (
    <CommitsInfoContext.Provider value={commitsInfoQuery}>
      {children}
    </CommitsInfoContext.Provider>
  );
}

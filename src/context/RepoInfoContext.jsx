/* eslint-disable react/prop-types */
// RepoInfoContext.js
import React, { createContext, useContext } from 'react';
import useRepoInfoQuery from '../hooks/useRepoInfoQuery';

const RepoInfoContext = createContext();

export const useRepoInfoStore = () => useContext(RepoInfoContext);

export function RepoInfoProvider({ children }) {
  const repositoryInfoQuery = useRepoInfoQuery();

  return (
    <RepoInfoContext.Provider value={repositoryInfoQuery}>
      {children}
    </RepoInfoContext.Provider>
  );
}

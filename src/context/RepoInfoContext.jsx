/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// RepoInfoContext.js
import { createContext, useContext } from 'react';
import useRepoInfoQuery from '../hooks/useRepoInfoQuery';

const RepoInfoContext = createContext();

export const useRepoInfoStore = () => {
  return useContext(RepoInfoContext);
};

export const RepoInfoProvider = ({ children }) => {
  const repositoryInfoQuery = useRepoInfoQuery();

  return (
    <RepoInfoContext.Provider value={repositoryInfoQuery}>
      {children}
    </RepoInfoContext.Provider>
  );
};

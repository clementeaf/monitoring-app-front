/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import React from 'react';
import { CommitsInfoProvider } from './CommitsInfoContext';
import { RepoInfoProvider } from './RepoInfoContext';

const contextMapping = {
  Repository: RepoInfoProvider,
  Commits: CommitsInfoProvider,
};

function GlobalProvider({ state, children }) {
  const SelectedProvider = contextMapping[state] || null;

  if (!SelectedProvider) return <>{children}</>;

  return <SelectedProvider>{children}</SelectedProvider>;
}

export default GlobalProvider;

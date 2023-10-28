/* eslint-disable react/prop-types */

import { CommitsInfoProvider } from "./CommitsInfoContext";
import { RepoInfoProvider } from "./RepoInfoContext";

const contextMapping = {
  Repository: RepoInfoProvider,
  Commits: CommitsInfoProvider,
};

const GlobalProvider = ({ state, children }) => {
  const SelectedProvider = contextMapping[state] || null;

  if (!SelectedProvider) return <>{children}</>

  return <SelectedProvider>{children}</SelectedProvider>
};

export default GlobalProvider;

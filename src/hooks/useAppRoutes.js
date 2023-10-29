import {
  MAIN_ROUTE,
  COMMITS_HISTORY_ROUTE,
  REPOSITORY_INFO_ROUTE,
  SIGN_IN_ROUTE,
} from '../routes';

export default function useAppRoutes() {
  return [
    MAIN_ROUTE,
    SIGN_IN_ROUTE,
    COMMITS_HISTORY_ROUTE,
    REPOSITORY_INFO_ROUTE,
  ];
}

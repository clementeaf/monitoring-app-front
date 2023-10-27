import {
  MAIN_ROUTE,
  COMMITS_HISTORY_ROUTE,
  REPOSITORY_INFO_ROUTE,
} from '../routes';

export default function useAppRoutes() {
  return [
    MAIN_ROUTE,
    COMMITS_HISTORY_ROUTE,
    REPOSITORY_INFO_ROUTE,
  ];
}

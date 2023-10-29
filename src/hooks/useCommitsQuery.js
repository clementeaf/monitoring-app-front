/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from 'react-query';
import { fetchAllCommits } from '../services/CommitsFetch';

export default function useCommitsQuery() {
  return useQuery({
    queryKey: ['commitsQuery'],
    queryFn: () => fetchAllCommits(),
  });
}

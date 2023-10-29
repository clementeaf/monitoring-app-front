/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { GET_ALL_COMMITS_API_V1 } from './endPoints';

export async function fetchAllCommits() {
  const response = await axios.get(GET_ALL_COMMITS_API_V1, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) return response.data;
}

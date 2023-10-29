/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eqeqeq */
import axios from 'axios';
import { GET_REPOSITORY_INFO_API_V1 } from './endPoints';

export async function fetchRepoInfo() {
  const response = await axios.get(GET_REPOSITORY_INFO_API_V1, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status == 200) return response.data;
}

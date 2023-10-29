/* eslint-disable import/no-extraneous-dependencies */
import { format } from 'date-fns';
import { monthName } from './config';

export default function formatCustomDate(dateString) {
  const date = format(new Date(dateString), 'dd/MM/yyyy HH:mm');
  const parts = date.split(/[/ :]/);
  const day = parts[0] || 'N/A';
  const month = parts[1] ? monthName[parts[1]] : 'N/A';
  const year = parts[2] || 'N/A';
  const time = parts[3] && parts[4] ? `${parts[3]}:${parts[4]}` : 'N/A';

  return { day, month, year, time };
}

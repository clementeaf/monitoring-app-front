export const monthName = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};
export const currentDate = new Date();
export const day = currentDate.getDate();
export const month = currentDate.getMonth() + 1;
export const year = currentDate.getFullYear();
export const fechaSolicitud = `${day}/${month}/${year}`;

import makeApiRequest from 'sdk/api/apiRequestManager';
import { getShortDate } from 'helpers';

const getDayPicture = (date) => {
  let url = 'https://api.nasa.gov/planetary/apod?api_key=r9SiMM7mabFf2vWVtDulq85hSaA8FRy43rwcDM5c';
  if (date) {
    url = `${url}&date=${getShortDate(date)}`;
  }
  return makeApiRequest(url);
};

export default getDayPicture;

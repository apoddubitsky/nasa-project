// constants
import {
  SAVE_DATE,
  REMOVE_DATE,
  SAVE_NEW_DAY,
} from 'constants/actionTypes';

const saveDate = (date) => ({
  type: SAVE_DATE,
  date,
});

const removeDate = () => ({
  type: REMOVE_DATE,
});

const saveNewDay = (newDay) => ({
  type: SAVE_NEW_DAY,
  newDay,
});

export {
  saveDate,
  removeDate,
  saveNewDay,
};

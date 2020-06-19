// constants
import {
  SAVE_DATE,
  REMOVE_DATE,
  SAVE_NEW_DAY,
} from 'constants/actionTypes';

const initialState = {
  days: [],
  date: null,
};

const astronomy = (state = initialState, action) => {
  if (action.type === SAVE_DATE) {
    return { ...state, date: action.date };
  }

  if (action.type === REMOVE_DATE) {
    return { ...state, date: null };
  }

  if (action.type === SAVE_NEW_DAY) {
    const { newDay } = action;
    const isNewDatePresent = state.days.find((item) => item.date === newDay.date);

    return {
      ...state,
      days: isNewDatePresent ? state.days
        : [...state.days, newDay].sort((a, b) => (a.date > b.date ? 1 : -1)),
    };
  }

  return state;
};

export default astronomy;

// libraries
import React, { useState } from 'react';
import ReactDatePicker from 'react-date-picker';
import { instanceOf, func } from 'prop-types';

const DatePicker = ({
  minDate, maxDate, handleChoosenDate, savedDate,
}) => {
  const [date, setDate] = useState();
  const onChange = (newDate) => {
    handleChoosenDate(newDate);
    setDate(date);
  };

  return (
    <ReactDatePicker
      format="dd/M/yyyy"
      minDate={minDate}
      maxDate={maxDate}
      onChange={onChange}
      value={date || savedDate || new Date()}
    />
  );
};

DatePicker.propTypes = {
  handleChoosenDate: func.isRequired,
  maxDate: instanceOf(Date),
  minDate: instanceOf(Date),
  savedDate: instanceOf(Date),
};

DatePicker.defaultProps = {
  maxDate: null,
  minDate: null,
  savedDate: null,
};

export default DatePicker;

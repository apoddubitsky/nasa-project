// libraries
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import DatePicker from 'components/common/DatePicker';
import Loading from 'components/common/Loading';
import DayPicture from 'components/nasa/DayPicture';
// services
import getDayPicture from 'services';
// helpers
import { getShortDate } from 'helpers';
// actions
import { saveDate, removeDate, saveNewDay } from 'actions/astronomy';

const DayPictureData = () => {
  const [astronomyInfo, setAstronomyInfo] = useState(new Date());
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const { date: savedDate } = useSelector(({ astronomy }) => astronomy);

  const handleChoosenDate = (date) => {
    const currentDate = new Date();
    if (date && (getShortDate(currentDate) !== getShortDate(date))) {
      dispatch(saveDate(date));
    }

    if (!date
      || (date && (getShortDate(currentDate) === getShortDate(date)))
    ) {
      dispatch(removeDate());
    }
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const data = await getDayPicture(savedDate ? new Date(savedDate) : null);
      dispatch(saveNewDay(data));
      setAstronomyInfo(data);
    } catch (e) {
      const { msg } = await e.json();
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  }, [savedDate, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }
    if (errorMessage) { return <p className="error">{errorMessage}</p>; }
    if (astronomyInfo.url) {
      return (
        <>
          <h3 className="text-center">{astronomyInfo.title}</h3>
          <DayPicture astronomyInfo={astronomyInfo} />
        </>
      );
    }
    return null;
  };

  return (
    <>
      <h1 className="text-center">
        Astronomy Picture of the Day
      </h1>
      <div className="text-center">
        <p>
          Choose date:
        </p>
        <DatePicker
          handleChoosenDate={handleChoosenDate}
          minDate={new Date(1995, 5, 16)}
          maxDate={new Date()}
          savedDate={savedDate ? new Date(savedDate) : null}
        />
      </div>
      {renderContent()}
    </>
  );
};
export default DayPictureData;

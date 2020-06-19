// libraries
import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
// components
import EmbeddedVideo from 'components/common/EmbeddedVideo';
import Loading from 'components/common/Loading';
// helpers
import { isVideoUrl } from 'helpers';

const DayPicture = ({ astronomyInfo }) => {
  const [isImgLoading, setImgLoading] = useState(true);
  const { date } = useParams();
  const { days } = useSelector(({ astronomy }) => astronomy);
  let resultInfo = astronomyInfo;

  if (date) {
    resultInfo = days.find((item) => item.date === date);
  }

  const handleImgLoading = () => {
    setImgLoading(false);
  };

  return (
    <>
      {date && <h1 className="text-center">{resultInfo.title}</h1>}
      {isVideoUrl(resultInfo.url) ? <EmbeddedVideo src={resultInfo.url} /> : (
        <div className="image-container">
          {isImgLoading && <Loading />}
          <img
            onLoad={handleImgLoading}
            className={classNames('image', { hidden: isImgLoading })}
            src={resultInfo.url}
            alt="Astronomy"
          />
        </div>
      )}
      <p>
        {resultInfo.explanation}
      </p>
    </>
  );
};

DayPicture.propTypes = {
  astronomyInfo: shape({
    date: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string,
  }),
};

DayPicture.defaultProps = {
  astronomyInfo: {},
};

export default DayPicture;

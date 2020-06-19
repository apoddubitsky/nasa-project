// libraries
import React from 'react';
import {
  string, shape, oneOfType, node, number,
} from 'prop-types';
import { useHistory } from 'react-router-dom';

const GalleryItem = ({ index, data, children }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/nasa/gallery/${data.date}`);
  };
  return (
    <div
      onClick={(handleClick)}
      tabIndex={index}
      role="link"
      className="image-container gallery__item"
      onKeyDown={() => { }}
    >
      {children}
      <div className="text-center">{data.date}</div>
    </div>
  );
};

GalleryItem.propTypes = {
  data: shape({
    date: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string,
  }).isRequired,
  children: oneOfType([node]).isRequired,
  index: number.isRequired,
};

export default GalleryItem;

// libraries
import React from 'react';
import { useSelector } from 'react-redux';
// compopnents
import Gallery from 'components/common/Gallery';

const AstronomyGallery = () => {
  const { days } = useSelector(({ astronomy }) => astronomy);

  return (
    <>
      <h1 className="text-center">Astronomy Gallery</h1>
      <Gallery data={days} />
    </>
  );
};

export default AstronomyGallery;

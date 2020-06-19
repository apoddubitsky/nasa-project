// libraries
import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
// components
import EmbeddedVideo from 'components/common/EmbeddedVideo';
import GalleryItem from './GalleryItem';
// helpers
import { isVideoUrl } from 'helpers';

const ImageGallery = ({ data }) => (
  <div className="gallery">
    {data.map((item, index) => {
      if (isVideoUrl(item.url)) {
        return (
          <GalleryItem data={item} index={index} key={item.url}>
            <EmbeddedVideo key={item.url} src={item.url} />
          </GalleryItem>
        );
      }
      return (
        <GalleryItem data={item} index={index} key={item.url}>
          <img
            className="image"
            src={item.url}
            alt="Astronomy"
          />
        </GalleryItem>
      );
    })}
  </div>
);

ImageGallery.propTypes = {
  data: arrayOf(shape({
    date: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string,
  })).isRequired,
};

export default ImageGallery;

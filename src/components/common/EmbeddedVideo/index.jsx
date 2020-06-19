// libraries
import React from 'react';
import { string } from 'prop-types';

const EmbeddedVideo = ({ src, additionalClass }) => (
  <div className={`iframe-container ${additionalClass}`}>
    <iframe
      className="iframe"
      title={src.toString()}
      width="100%"
      height="100%"
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

EmbeddedVideo.propTypes = {
  src: string.isRequired,
  additionalClass: string,
};

EmbeddedVideo.defaultProps = {
  additionalClass: '',
};

export default EmbeddedVideo;

const getShortDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

const isVideoUrl = (url) => url.match(/youtube|ustream|vimeo/);

export {
  getShortDate,
  isVideoUrl,
};

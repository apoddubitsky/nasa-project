// libraries
import React from 'react';
// static
import { ReactComponent as Spinner } from 'assets/svg/spinner.svg';

const Loading = () => (
  <div className="spinner-container">
    <Spinner className="spinner" />
  </div>

);

export default Loading;

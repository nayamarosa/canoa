import React from 'react';

import './Loading.scss';

const Loading = (props) => (
  <div className="loading">
    {props.format}
  </div>
);

export default Loading;
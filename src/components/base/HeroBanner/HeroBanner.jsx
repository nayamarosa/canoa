import React from 'react';

import './HeroBanner.scss';

export default function HeroBanner(props) {
  return <div className="hero-banner">
          <img src={props.src} alt={props.alt}/>
        </div>
}
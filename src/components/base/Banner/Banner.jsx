import React from 'react';

import './Banner.scss';

export default function Banner(props) {
  return (
    <div className={props.classNameBanner}>
      { props.src.length > 0 
      ? <img src={props.src} alt={props.alt}/> 
      : <img src='/placeholder_image.jpg' alt="imagem indisponível"/>
      }

      { props.percent === ""
      ? ''
      : <div className={props.classNameDiscount}>
        <span>{props.percent}</span>
        <span>OFF</span>
      </div>
      }
    </div>
    ) 
  }
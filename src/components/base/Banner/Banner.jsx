import React from 'react';

import './Banner.scss';

export default function Banner(props) {
  return (
    <div className={props.classNameBanner}>
      { props.src.length > 0 
      ? <img src={props.src} alt={props.alt}/> 
      : <img src={"https://viniciusvinna.netlify.app/assets/api-fashionista/20002584_035_catalog_1.jpg"} alt="imagem indisponível"/>
      }
      {/* <img src={props.src} alt={props.alt}/> */}
      <div className={props.classNameDiscount}>
        <span>{props.percent}</span>
        <span>OFF</span>
      </div>
    </div>
    ) 
  }
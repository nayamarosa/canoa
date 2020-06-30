import React from 'react';

const Image = (props) => {
  return (
    <div className={props.classNameImage}>
      { props.src !== ''
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

export default Image;
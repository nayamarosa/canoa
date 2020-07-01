import React from 'react';

const Button = (props) => {
  return <button 
            id={props.id} 
            type={props.type} 
            className={`btn ${props.classNameBtn}`} 
            onClick={props.onClick}>
            <span>{props.text}</span>
            <i className={props.icon}></i>
          </button>
}

export default Button;
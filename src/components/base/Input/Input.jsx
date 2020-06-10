import React from 'react';

import './Input.scss';

export default function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} className={`input ${props.className}`}></input>
}

// Amostra de input
//   <Input 
//     type="text"
//     placeholder="o que você procura?"
//     className="input__search"
//   />
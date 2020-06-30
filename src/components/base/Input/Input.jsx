import React from 'react';

import './Input.scss';

export default function Input(props) {
  return (
    <div className={props.classNameInputGroup}>
      <input 
        className={props.classNameInput} 
        type={props.type} 
        id={props.id} 
        name={props.name} 
        value={props.value} 
        required={props.required}
        disabled={props.disabled}
        placeholder={props.placeholder} 
        onChange={props.handleChange}
        onClick={props.onClick}
        />
      <label 
        htmlFor={props.id} 
        className={props.classNameLabel}>
        {props.label}
      </label>
    </div>
  ) 
}
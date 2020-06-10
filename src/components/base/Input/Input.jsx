import React from 'react';

import './Input.scss';

export default function Input(props) {
    return <input type={props.type} placeholder={props.placeholder} className={`input ${props.className}`}></input>
}
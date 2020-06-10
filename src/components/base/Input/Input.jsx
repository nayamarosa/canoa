import React from 'react';

import './Input.scss';

export default function Input(props) {
    return <input type={props.type} className={`input ${props.className}`}></input>
}
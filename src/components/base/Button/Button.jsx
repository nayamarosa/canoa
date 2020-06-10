import React from 'react';

import './Button.scss';

export default function Button(props) {
    return <button type={props.type} className={`btn ${props.className}`}>
        {props.text}
        <i className={props.icon}></i>
        </button>
}
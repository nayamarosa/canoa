import React from 'react';

import './IconButton.scss';

export default function IconButton(props) {
    return <button type={props.type} className={`icon-btn ${props.className}`}>
                <i className={props.icon}></i>
            </button>
}
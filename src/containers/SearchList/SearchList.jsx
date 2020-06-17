import React from 'react';

import '../../components/Search/Search.scss';

export default function SearchList(props) {
return <ul className="container search__list">
          {props.children}
        </ul>
}
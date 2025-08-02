import React from 'react';
import './Title.css';

function Title(props) {
    return (
      <div className='title-frame'>
        {props.title && <h2>{props.title}</h2>}
        {props.variation && <p>Variation: {props.variation}</p>}
      </div>
    );
  }

export default Title;
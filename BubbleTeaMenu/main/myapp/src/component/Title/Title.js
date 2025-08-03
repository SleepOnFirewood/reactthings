import React from 'react';
import './Title.css';

function Title(props) {
    return (
      <div className='title-container'>
        <div className='title-frame'>
              {props.children[0]}
              {props.children[1]}
        </div>
      </div>
    );
}

export default Title;
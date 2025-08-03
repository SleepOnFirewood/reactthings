import React from 'react';
import './Logo.css';

function Logo(props) {
    return (
        <div className='logo-frame animate-spin'>
        {props.image && (
          <img
            src={props.image}
            className='card-image'
            alt={props.title}
            />
        )
    }
        </div>
    );
}

export default Logo;
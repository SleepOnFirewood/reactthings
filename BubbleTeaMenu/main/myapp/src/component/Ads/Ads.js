import React from 'react';
import './Ads.css';

function Ads(props) {
    return (
      <div className='ads-container'>
        <div className='ads-frame'>
        {props.image && (
          <img
            src={props.image}
            className='ad-image'
            alt={props.title}
            />
        )}
        </div>
      </div>
    );
}

export default Ads;
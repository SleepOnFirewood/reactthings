import React from 'react';
import './Card.css';

function Card(props) {
    return (
      <div className='card-frame'>
        {props.title && <h2>{props.title}</h2>}
        {props.description && <p>{props.description}</p>}
        {props.price && <p>Price: {props.price}</p>}
      </div>
    );
  }

export default Card;
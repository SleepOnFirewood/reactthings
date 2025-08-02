import React from 'react';
import './Card.css';

function Card(props) {
    return (
      <div className='card-frame'>
        {props.image && (
          <img
            src={props.image}
            className='card-image'
            alt={props.title}
            />
        )
        }
        {props.title && <h2>{props.title}</h2>}
        {props.price && <p>Price: {props.price}</p>}
      </div>
    );
  }

export default Card;
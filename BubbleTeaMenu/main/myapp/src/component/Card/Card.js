import React from 'react';
import './Card.css';

function Card(props) {
    return (
      <div className='card-frame'>
        {props.ranking && props.ranking.length > 0 && (
          <div className={`ranking-number ${props.ranking[0] === 1 ? 'ranking-number-1' : ''}`}>
            {props.ranking.map((number, index) => (
                <span key={index}>{number}</span>
            ))}
            </div>
        )}
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
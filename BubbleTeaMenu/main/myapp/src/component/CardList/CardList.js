import React from 'react';
import Card from '../Card/Card';
import './CardList.css'

function CardList({ cards }) {
    return (
        <div className='card-list'>
            {cards.map((card, index) => (
                <Card 
                    key={index}
                    title={card.title}
                    description={card.description}
                    price={card.price}
                    image={card.image}
                    ranking={card.ranking || [0]}
                />
            ))}
        </div>
    );
}

export default CardList;
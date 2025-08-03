import React from 'react';
import './TopCards.css'

function TopCards(props)
{
    return(
        <div className='TopCards-Frame'>
            {props.children}
        </div>
    );

}

export default TopCards;


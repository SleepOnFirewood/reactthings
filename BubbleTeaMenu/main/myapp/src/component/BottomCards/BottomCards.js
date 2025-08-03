import React from 'react';
import './BottomCards.css'
function BottomCards(props)
{
    return(
        <div className='BottomCards-Frame'>
            {props.children}
        </div>
    );

}

export default BottomCards;
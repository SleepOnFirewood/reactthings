import React from 'react';
import './MenuContainer.css'

function MenuContainer(props)
{
    return(
        <div className='menuContainer-Frame'>
            <div className="option-Title"></div>
            {props.title && <h2>{props.title}</h2>}
            {props.price && <h2>{props.price}</h2>}
        </div>
    )

}

export default MenuContainer;
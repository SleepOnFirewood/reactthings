import React from 'react';
import './MenuContainer.css'

function MenuContainer(props)
{
    return(
        <div className='menuContainer-Frame'>
            {props.children}
        </div>
    )

}

export default MenuContainer;
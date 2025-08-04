import React from 'react';
import './DisplayContainer.css'

function DisplayContainer(props)
{
    return(
        <div className='displayContainer-Frame'>
            {props.children}
        </div>
    )

}

export default DisplayContainer;
import React from 'react';
import './Top10Container.css'

function Top10Container(props)
{
    return(
        <div className='Top10Container-Frame'>
            {props.children}
        </div>
    )

}

export default Top10Container;
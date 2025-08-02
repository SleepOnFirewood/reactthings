import React from 'react';
import './Top5Container.css'

function Top5Container(props)
{
    return(
        <div className='Top5Container-Frame'>
            {props.children}
        </div>
    )

}

export default Top5Container;
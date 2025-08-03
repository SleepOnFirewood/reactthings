import React from 'react';
import './BubbleTeaContainer.css'

function BubbleTeaContainer(props)
{
    return(
        <div className='BubbleTeaContainer'>
            {props.children}
 
        </div>
    )

}

export default BubbleTeaContainer;

import React from 'react';
import './MenuContainer.css'

function MenuContainer({ title, price }) {
    return (
        <div className='menu-item'>
            {title && <h3>{title}</h3>}
        </div>
    )
}

export default MenuContainer;
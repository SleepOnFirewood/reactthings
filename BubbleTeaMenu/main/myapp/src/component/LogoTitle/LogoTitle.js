import React from 'react';
import './LogoTitle.css';

function LogoTitle(props) {
    return (
        <div className='logotitle-frame'>
            {props.children}
        </div>
    );
}

export default LogoTitle;
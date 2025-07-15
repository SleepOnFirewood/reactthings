import React from 'react';
import './borderFrame.css'

function Border(props) {
    return (
      <div className="border-container">
        {props.children}
      </div>
    );
  }
  
  export default Border;
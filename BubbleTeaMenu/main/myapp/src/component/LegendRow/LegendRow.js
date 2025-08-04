import React from 'react';
import './LegendRow.css'
import { FaSnowflake, FaFire, FaLeaf } from 'react-icons/fa';

function LegendRow(props)
{
    return(
        <div className='LegendRow-Frame'>
            <div className="legend-item">
                <FaSnowflake size={40} className="snowflake-blue"/>Cold</div>
            <div className="legend-item">
                <FaFire size={40} className="fire-red"/>Hot</div>
            <div className="legend-item">
                <FaLeaf size={40} className="nonDairy"/>Non-Dairy</div>            
        </div>
    );

}

export default LegendRow;


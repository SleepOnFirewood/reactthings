import React from 'react';
import './LegendRow.css'
import { FaSnowflake, FaFire } from 'react-icons/fa';

function LegendRow(props)
{
    return(
        <div className='LegendRow-Frame'>
            <div className="legend-item">
                <FaSnowflake className="snowflake-blue"/>Cold</div>
            <div className="legend-item">
                <FaFire className="fire-red"/>Hot</div>
        </div>
    );

}

export default LegendRow;


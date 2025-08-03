import React from 'react';
import './LegendRow.css'
import { FaSnowflake, FaFire } from 'react-icons/fa';

function LegendRow(props)
{
    return(
        <div className='LegendRow-Frame'>
            <div className="legend-item">
                <FaSnowflake size={30} className="snowflake-blue"/>Cold</div>
            <div className="legend-item">
                <FaFire size={30} className="fire-red"/>Hot</div>
        </div>
    );

}

export default LegendRow;


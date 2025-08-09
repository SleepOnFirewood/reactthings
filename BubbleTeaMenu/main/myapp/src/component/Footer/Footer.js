import React from 'react';
import './Footer.css'
import { FaSnowflake, FaFire, FaLeaf, FaLemon } from 'react-icons/fa';

function Footer(props)
{
    return (
        <div className="footer-section">
            <div className="options-container">
                {/* Toppings Section */}
                <div className="toppings-section">
                    <h3>Toppings</h3>
                    <ul className="toppings-list">
                        <li>Mini Mochi</li>
                        <li>Red Bean</li>
                        <li>Pudding</li>
                        <li>Lychee Jelly</li>
                        <li>Mango Jelly Star</li>
                        <li>Tapioca</li>
                        <li>Cheese Foam</li>
                        <li>Rainbow Jelly</li>
                        <li>Coffee Jelly</li>
                        <li>Aoe Vera</li>
                        <li>Mango Popping Pearl</li>
                        <li>Cyrstal Jelly Boba</li>
                        <li>Peach</li>
                        <li>Sago Pearl</li>
                        <li>Green Apple Jelly</li>
                        <li>Green Apple Popping Pearl</li>
                        <li>Yogurt Popping Pearl</li>
                        <li>Strawberry Popping Peral</li>
                        <li>Lychee Popping Pearl</li>
                    </ul>
                </div>
                <div className="sugar-section">
                    <h3>Sugar Levels</h3>
                    <ul className="sugar-list">
                        <li>25%</li>
                        <li>50%</li>
                        <li>75%</li>
                        <li>100%</li>
                    </ul>
                </div>
                <div className="legend-section">
                    <ul className="legend-list">
                        <li>
                            <div class="icon-container">
                                <FaSnowflake size={30} className="snowflake-blue"/>
                            </div>
                            Cold
                        </li>
                        <li>
                            <div class="icon-container">
                                <FaFire size={30} className="fire-red"/>
                            </div>
                            Warm
                        </li>
                        <li>
                            <div class="icon-container">
                                <FaLeaf size={30} className="nonDairy"/>
                            </div>
                            Non-Dairy
                        </li>
                        <li>
                            <div class="icon-container">
                                <FaLemon size={30} className="lemon-yellow"/>
                            </div>
                            Contains Real Fruit
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Footer;
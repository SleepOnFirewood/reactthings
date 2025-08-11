import React from 'react';
import Border from '../component/Border/borderFrame';
import Top10Container from '../component/Top10Container/Top10Container';
import Logo from '../component/Logo/Logo';
import LogoTitle from '../component/LogoTitle/LogoTitle';
import Footer from '../component/Footer/Footer';
import MenuContainer from '../component/MenuContainer/MenuContainer';
import { menuData } from '../component/MenuContainer/MenuItems';

function SecondPage() {
    const menuCategories = Object.entries(menuData);
    return (
      <Border>
        <Logo image='/images/bubbleteabrewerlogo.png'/>
        <LogoTitle>BubbleTea Brewers</LogoTitle>
        <Top10Container>
            <div className="menu-grid">
                {menuCategories.map(([category, items]) => (
                    <div key={category} className="menu-section">
                        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                        
                        <div className="menu-items-container">
                            {items.map((item) => (
                                <MenuContainer
                                    key={item.name}
                                    title={item.name}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Top10Container>
        <Footer></Footer>
      </Border>
    );
}

export default SecondPage;
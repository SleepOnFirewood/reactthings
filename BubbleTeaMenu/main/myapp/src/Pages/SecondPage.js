import React from 'react';
import Border from '../component/Border/borderFrame';
import Top10Container from '../component/Top10Container/Top10Container';
import Logo from '../component/Logo/Logo';
import LogoTitle from '../component/LogoTitle/LogoTitle';
import Footer from '../component/Footer/Footer';
import MenuContainer from '../component/MenuContainer/MenuContainer';
import { categories } from '../component/MenuContainer/MenuItems';
import CategorySection from '../component/CategorySection/CategorySection';
import './SecondPage.css'


function SecondPage() {
    return (
      
      <Border>
        <Logo image='/images/bubbleteabrewerlogo.png'/>
        <LogoTitle>BubbleTea Brewers</LogoTitle>
        <Top10Container>
            <div className="second-page">
                {categories.map((cat)=> 
                (<CategorySection 
                key={cat.id} 
                price={cat.price}
                title={cat.title} 
                items={cat.items}
                image={cat.image}/>))}
            </div>
        </Top10Container>
        <Footer></Footer>
      </Border>
    );
}

export default SecondPage;
import React from 'react';
import Border from '../component/Border/borderFrame';
import BubbleTeaContainer from '../component/BubbleTeaContainer/BubbleTeaContainer';
import Title from '../component/Title/Title';
import Top10Container from '../component/Top10Container/Top10Container';
import TopCards from '../component/TopCards/TopCards';
import Card from '../component/Card/Card';
import BottomCards from '../component/BottomCards/BottomCards';
import LegendRow from '../component/LegendRow/LegendRow';
import Logo from '../component/Logo/Logo';
import LogoTitle from '../component/LogoTitle/LogoTitle';
import CardList from '../component/CardList/CardList';
import Ads from '../component/Ads/Ads';
import DisplayContainer from '../component/DisplayContainer/DisplayContainer';
import Footer from '../component/Footer/Footer';

function SecondPage() {
    return (
      <Border>
        <Logo image='/images/bubbleteabrewerlogo.png'/>
        <LogoTitle>BubbleTea Brewers</LogoTitle>
        <Top10Container>
        </Top10Container>
        <Footer></Footer>
      </Border>
    );
}

export default SecondPage;
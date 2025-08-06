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


function Top10Page() {

    const topCards = [
    { title: "Wintermelon Basil", description: "Fresh winter melon puree blended with basil leaves.", price: "$5.99", image: '/images/boba.png', ranking: [1] },
    { title: "Wintermelon Basil", description: "Fresh winter melon puree blended with basil leaves.", price: "$5.99", image: '/images/boba.png', ranking: [2] },
    { title: "Wintermelon Basil", description: "Fresh winter melon puree blended with basil leaves.", price: "$5.99", image: '/images/boba.png', ranking: [3] },
    { title: "Wintermelon Basil", description: "Fresh winter melon puree blended with basil leaves.", price: "$5.99", image: '/images/boba.png', ranking: [4] },
    { title: "Wintermelon Basil", description: "Fresh winter melon puree blended with basil leaves.", price: "$5.99", image: '/images/boba.png', ranking: [5] }
  ]

    const bottomCards = [
    { title: "Wintermelon Basil", description: "Fresh winter melon puree blended with basil leaves.", price: "$5.99", image: '/images/boba.png', ranking: [6] },
    { title: "Wintermelon Basil", description: "Fresh winter melon puree blended with basil leaves.", price: "$5.99", image: '/images/boba.png', ranking: [7] },
    { title: "Wintermelon Basil", description: "Fresh winter melon puree blended with basil leaves.", price: "$5.99", image: '/images/boba.png', ranking: [8] },
    { title: "Wintermelon Basil", description: "Fresh winter melon puree blended with basil leaves.", price: "$5.99", image: '/images/boba.png', ranking: [9] },
    { title: "Wintermelon Basil", description: "Fresh winter melon puree blended with basil leaves.", price: "$5.99", image: '/images/boba.png', ranking: [10] },
  ]
    
    return (
      <Border>
        <Logo image='/images/bubbleteabrewerlogo.png'/>
        <LogoTitle>BubbleTea Brewers</LogoTitle>
        <Top10Container>
          <DisplayContainer>
          <Title>
              <span>Top 10</span>
              <span>Favourites</span>
            <LegendRow>
            </LegendRow>
          </Title>
          <Ads image='/images/bubbletea_ad.png' />
          </DisplayContainer>
          <BubbleTeaContainer>
            <TopCards>
              <CardList cards={topCards} />
            </TopCards>
            <BottomCards>
              <CardList cards={bottomCards} />
            </BottomCards>

          </BubbleTeaContainer>
        </Top10Container>
      </Border>
    );
}

export default Top10Page;

import './App.css';
import Border from './component/Border/borderFrame';
import BubbleTeaContainer from './component/BubbleTeaContainer/BubbleTeaContainer';
import Title from './component/Title/Title';
import Top10Container from './component/Top10Container/Top10Container';
import TopCards from './component/TopCards/TopCards';
import Card from './component/Card/Card';
import BottomCards from './component/BottomCards/BottomCards';
import LegendRow from './component/LegendRow/LegendRow';
import Logo from './component/Logo/Logo';
import LogoTitle from './component/LogoTitle/LogoTitle';


function App() {
  return (
    <div className="App">
      <Border>
        <Logo image='/images/bubbleteabrewerlogo.png'/>
        <LogoTitle>BubbleTea Brewers</LogoTitle>
        <Top10Container>
          <Title>
              <span>Top 10</span>
              <span>Favourites</span>
            <LegendRow>
            </LegendRow>
          </Title>
          <BubbleTeaContainer>
            <TopCards>
              <Card 
            title="Wintermelon Basil" 
            description="Fresh winter melon puree blended with basil leaves."
            price="$5.99"
            image='/images/boba.png'
            ranking= {[1]}/>
              <Card 
            title="Wintermelon Basil" 
            description="Fresh winter melon puree blended with basil leaves."
            price="$5.99"
            image='/images/boba.png'
            ranking= {[2]}/>
              <Card 
            title="Wintermelon Basil" 
            description="Fresh winter melon puree blended with basil leaves."
            price="$5.99"
            image='/images/boba.png'/>
              <Card 
            title="Wintermelon Basil" 
            description="Fresh winter melon puree blended with basil leaves."
            price="$5.99"
            image='/images/boba.png'/>
              <Card 
            title="Wintermelon Basil" 
            description="Fresh winter melon puree blended with basil leaves."
            price="$5.99"
            image='/images/boba.png'/>
            </TopCards>
            <BottomCards>
              <Card 
            title="Wintermelon Basil" 
            description="Fresh winter melon puree blended with basil leaves."
            price="$5.99"
            image='/images/boba.png'/>
              <Card 
            title="Wintermelon Basil" 
            description="Fresh winter melon puree blended with basil leaves."
            price="$5.99"
            image='/images/boba.png'/>
              <Card 
            title="Wintermelon Basil" 
            description="Fresh winter melon puree blended with basil leaves."
            price="$5.99"
            image='/images/boba.png'/>
              <Card 
            title="Wintermelon Basil" 
            description="Fresh winter melon puree blended with basil leaves."
            price="$5.99"
            image='/images/boba.png'/>
              <Card 
            title="Wintermelon Basil" 
            description="Fresh winter melon puree blended with basil leaves."
            price="$5.99"
            image='/images/boba.png'/>
            </BottomCards>

          </BubbleTeaContainer>
        </Top10Container>
      </Border>

 
    </div>
  );
}
export default App;

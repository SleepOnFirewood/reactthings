
import './App.css';
import Border from './component/Border/borderFrame';
import BubbleTeaContainer from './component/BubbleTeaContainer/BubbleTeaContainer';
import Title from './component/Title/Title';
import Top10Container from './component/Top10Container/Top10Container';
import TopCards from './component/TopCards/TopCards';
import Card from './component/Card/Card';
import BottomCards from './component/BottomCards/BottomCards';


function App() {
  return (
    <div className="App">
      <Border>

        <Top10Container>
          <Title
          title ="Top 10 Favourites">
          </Title>
          <BubbleTeaContainer>
            <TopCards>
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

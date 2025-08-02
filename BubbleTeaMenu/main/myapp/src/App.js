
import './App.css';
import Border from './component/Border/borderFrame';
import Card from './component/Card/Card';
import Title from './component/Title/Title'
import Top10Container from './component/Top10Container/Top10Container';

function App() {
  return (
    <div className="App">
      <Border>

        <Top10Container>
          <Title
          title ="Top 10 Favourites">
          </Title>
          {/* <Card 
            title="Wintermelon Basil" 
            description="Fresh winter melon puree blended with basil leaves."
            price="$5.99"
          /> */}
        </Top10Container>
      </Border>

    </div>
  );
}
export default App;


import './App.css';
import Border from './component/Border/borderFrame';
import Card from './component/Card/Card';
import Title from './component/Title/Title'

function App() {
  return (
    <div className="App">
      <Border>
      <Title
          title="Recommended Top 5" 
          variation="hot, cold, etc"
      />
      <Card 
          title="Wintermelon Basil" 
          description="Fresh winter melon puree blended with basil leaves."
          price="$5.99"
        />
      <Card 
          title="Wintermelon Basil" 
          description="Fresh winter melon puree blended with basil leaves."
          price="$5.99"
        />
      </Border>

    </div>
  );
}
export default App;

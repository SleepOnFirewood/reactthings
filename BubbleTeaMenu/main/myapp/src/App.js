
import './App.css';
import Border from './component/Border/borderFrame';
import Card from './component/Card/Card';

function App() {
  return (
    <div className="App">
      <Border>
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

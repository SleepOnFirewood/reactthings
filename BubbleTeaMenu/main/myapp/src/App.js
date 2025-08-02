
import './App.css';
import Border from './component/Border/borderFrame';
import Card from './component/Card/Card';
import Title from './component/Title/Title'
import Top5Container from './component/Top5Container/Top5Container';

function App() {
  return (
    <div className="App">
      <Border>
      <Title
          title="Recommended Top 5" 
          variation="hot, cold, etc"
      />
      <Top5Container>

      </Top5Container>
      </Border>

    </div>
  );
}
export default App;

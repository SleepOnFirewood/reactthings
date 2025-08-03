
import './App.css';
import Border from './component/Border/borderFrame';
import BubbleTeaContainer from './component/BubbleTeaContainer/BubbleTeaContainer';
import Title from './component/Title/Title'
import Top10Container from './component/Top10Container/Top10Container';

function App() {
  return (
    <div className="App">
      <Border>

        <Top10Container>
          {/* <Title
          title ="Top 10 Favourites">
          </Title> */}
          {/* <BubbleTeaContainer>

          </BubbleTeaContainer> */}
        </Top10Container>
      </Border>

    </div>
  );
}
export default App;

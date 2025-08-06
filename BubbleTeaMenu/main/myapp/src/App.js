
import './App.css';
import SecondPage from './Pages/SecondPage';
import Top10Page from './Pages/Top10Page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top10Page></Top10Page>} />
        <Route path="/secondpage" element={<SecondPage></SecondPage>}/>
      </Routes>
    </Router>

  );
}
export default App;

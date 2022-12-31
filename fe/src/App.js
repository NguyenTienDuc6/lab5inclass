
import './App.css';
import DatingCard from './components/DatingCards';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header/>
      <DatingCard/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
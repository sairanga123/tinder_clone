import './App.css';
import Header from '../src/modules/Header/index.js';
import TinderCards from '../src/modules/TinderCards/index.js';
import SwipeButtons from '../src/modules/SwipeButtons/index.js';

function App() {
  return (
    // BEM class naming convention 
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
      {/* Cards of Pictures */}
      {/* Icons for actions */}
    </div>
  );
}

export default App;

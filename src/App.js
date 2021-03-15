import logo from './logo.svg';
import './App.css';
import WorldMap from './WorldMap.js';

function App() {
  return (
    <div className="root-container">
      <h1 id="page-title">Global COVID-19 Tracker</h1>
      <WorldMap style={{width:"100%", height:"100%"}}/>
    </div>
  );
}


export default App;

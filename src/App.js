import './App.css';
import WorldMap from './WorldMap.js';
import ColorBarKey from './ColorBar.js';

function App() {
  return (
    <div className="root-container">
      <h1 id="page-title">Global COVID-19 Recovery Tracker</h1>
      <div className="body-container">
        <WorldMap style={{width:"100%"}}/>
        <ColorBarKey id="color-bar-key"/>
      </div>
    </div>
  );
}


export default App;

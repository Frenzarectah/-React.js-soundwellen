import logo from './imgs/logo_novect.png';
import './App.css';
import './script.js';
import Subtitle from './Subtitle';
function App() {
  return (
    <div className="App">
        <img src={logo} className="logo" alt="logo" id="soundwellen" />
        <Subtitle />
    </div>
  );
}

export default App;

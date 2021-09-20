import logo from './imgs/logo_nowrite.jpg';
import './App.css';
import Subtitle from './Subtitle';
function App() {
  return (
    <div className="App">
          <a href="#" class="sound">
            <img src={logo} className="logo" alt="logo" id="soundwellen" />
          </a>
          <Subtitle />
    </div>
  );
}

export default App;

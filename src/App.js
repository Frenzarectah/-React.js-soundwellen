import logo from './imgs/logo_nowrite_.jpeg';
import './App.css';
import Navi from './Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
  function changePage(){
    var logo = document.getElementById("soundwellen");
    var sub = document.getElementsByClassName("subtitle")[0];
    logo.className="slideAway";
    sub.className="slideAway";
    var icon = document.getElementById("ico_mob");
    icon.className+=" _fadeIn";
  }
    return (
    <div className="App">
          <div className="container">
          <Navi/>
          <a href="#" className="sound">
            <img src={logo} className="logo" alt="logo" id="soundwellen" onClick={changePage} />
            <div className="subtitle">soundwellen</div>
          </a>
          {/*<button className="btn">ENTER THE SOUNDWELLEN</button>*/}
          </div>         
    </div>
  );
}
export default App;
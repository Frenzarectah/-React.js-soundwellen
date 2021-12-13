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
    var bttn = document.querySelector(".enter_btn");
    var homepage = document.querySelector(".homepage");
    var app = document.querySelector(".App");
    bttn.className+=" _fadeOut";
    homepage.className+=" _fadeIn";
    app.className+=" justify-content-start";
    icon.className+=" _fadeIn";
  }
    return (
    <div className="App">
          <div className="container-fluid">
          <Navi/>        
          <a href="#" className="sound">
            <img src={logo} className="logo" alt="logo" id="soundwellen" onClick={changePage} />
            <div className="subtitle">soundwellen</div>
          </a>
          </div>
          <button className="enter_btn" onClick={changePage}>DISCOVER</button>
          <div class="homepage">
              ET VENTIS ADVERSIS DIONAMINA SEMPER REFORMA
          </div> 
    </div>
  );
}
export default App;
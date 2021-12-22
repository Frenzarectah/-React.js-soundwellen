import logo from './imgs/logo_nowrite_.jpeg';
import './App.css';
import Navi from './Navbar';
import Main from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
            <img src={logo} className="logo" alt="logo" id="soundwellen" href="/mainpage" onClick={changePage} />
            <div className="subtitle">soundwellen</div>
          </a>
          </div>
          <button className="enter_btn" onClick={changePage} href="/mainpage">DISCOVER</button>
          <Main/>
          <Router>
            <Switch>
            <Route path="/mainpage" render={() => <Main/>} />
            </Switch>
          </Router>    
    </div>
  );
}
export default App;
/*<div class="homepage">
              ET VENTIS ADVERSIS DIONAMINA SEMPER REFORMA
    </div>*/
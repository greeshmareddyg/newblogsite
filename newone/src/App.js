import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dp from './common/images/dp.jpg';
import ProfileDetails from './features/profile-details/profile-details';
import Home from './views/home/home';
import About from './views/about/about';
import Contact from './views/contact/contact';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <p className="ribbon"></p>
          {/* <span className="header-title w3-jumbo">Greeshma Reddy <sub className="w3-large" >fire and peace ..!</sub></span> */}
          {/* <div id="nav">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blah</a></li>
              <li><a href="#">exampl</a>
              </li>
          </ul>
        </div> */}

          <nav className="navbar navbar-expand-lg navbar-light bg-light" id="main-nav-bar">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>              
              <li><Link to={'/about'} className="nav-link">About</Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

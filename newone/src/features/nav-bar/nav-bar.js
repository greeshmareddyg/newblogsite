import React, { Component } from 'react';
import '../../App/'

class NavBar extends React.Component {
    render() {
      return (
        <header className="App-fixed">
            <div class="flex-container">
                <div>1</div>
                <div>2</div>
                <div>3</div>  
            </div>

        <p className="ribbon"></p>
        <span className="header-title w3-jumbo">Greeshma Reddy <sub className="w3-large" >fire and peace ..!</sub></span>
        {/* <p className="ribbon2"></p> */}
        <div id="nav">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blah</a></li>
              <li><a href="#">exampl</a>
              </li>
          </ul>
        </div>
      </header>
      );
    }
  }
  

  export default NavBar;
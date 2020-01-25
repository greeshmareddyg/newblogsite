import React, { Component } from 'react';
import './home.css';
import Dp from '../../common/images/dp.jpg';
import ProfileDetails from '../../features/profile-details/profile-details';

class Home extends Component {
  render() {
    return (
        <div className="view-contatiner">
          <article> 
              <ProfileDetails/>
          </article>
          <section> section</section>   
        </div>
    );
  }
}

export default Home;
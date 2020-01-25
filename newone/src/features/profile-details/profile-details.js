import React, { Component } from 'react';
import './profile-details.css';
import Dp from '../../common/images/dp.jpg';
import {constants} from '../../common/constants/constants'

class ProfileDetails extends React.Component {
    render() {
      return (
          <div>
              <span><img src={Dp} className="profile-picture" alt="Avatar"/></span>
              <p className="my-name"> {constants.profileInfo.firstName} </p> 
              <p>{'Developer by profession'}</p>
              <p>{constants.profileInfo.Education + ' in ' + constants.profileInfo.stream}</p>               
          </div>
      );
    }
  }
  

  export default ProfileDetails;
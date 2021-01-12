import React, { Component } from 'react';
import "./JoinUsBlock.scss";
import { Link } from 'react-router-dom';

class JoinUsBlock extends Component {
    state = {  }
    render() { 
        return ( 
        <section id="_join-us-block">
            <div className="medium-wrapper join-us-wrapper">
              <div>
                <h4 className="sub-title light-sub-title">Join our Facebook Community!</h4>
                <p id="_join-us-text"  className="text">Become part of the large community of creators achieving their goals through video!</p>
              </div>
              <Link key="_join-us" to="#" className="button light-btn">Join Us Today</Link>
            </div>
          </section>
         );
    }
}
 
export default JoinUsBlock;
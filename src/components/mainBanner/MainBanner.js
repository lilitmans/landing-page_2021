import React, { Component } from 'react';
import './MainBanner.scss';
import { Link } from 'react-router-dom';
import Watch from '../../assets/icons/watch.svg';
import LoopAnimation from '../../components/loopAnimation/LoopAnimation';

class MainBanner extends Component {
    state = {  }
    render() { 
        return ( 
        <section id="_main-banner">
            <div className="wide-wrapper">
              <div className="medium-wrapper">
                <div className="flexbox-2">
                  <div className="text-block flex-item">
                      <h1>Animated <span>educational video maker</span> for stellar videos</h1>
                      <div className="btn-wrapper desktop-btn-creating">
                        <Link key="_start-creating" to="#" className="button light-btn">Start Creating</Link>
                        <div className="link-box">
                          <Link key="_watch-tutorial" to="#" className="link-with-icon">
                            <img src={Watch} alt="Watch Tutorial"/>
                            Watch Tutorial
                          </Link> 
                        </div>
                      </div>
                  </div>
                  <div className="img-block flex-item">
                    <div className="img-box">
                    </div>

                    <div className="btn-wrapper mobile-btn-creating">
                        <Link key="_start-creating" to="#" className="button light-btn">Start Creating</Link>
                        <div className="link-box">
                          <Link key="_watch-tutorial" to="#" className="link-with-icon">
                            <img src={Watch} alt="Watch Tutorial"/>
                            Watch Tutorial
                          </Link> 
                        </div>
                    </div>
                  </div>
                </div>
                <LoopAnimation />
              </div>
            </div>
          </section>
         );
    }
}
 
export default MainBanner;
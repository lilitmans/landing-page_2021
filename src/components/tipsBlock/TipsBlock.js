import React, { Component } from 'react';
import './TipsBlock.scss';
import { Link } from 'react-router-dom';
import Tips from '../../assets/images/tips-image.png';

class TipsBlock extends Component {
    state = {  }
    render() { 
        return ( 
        <section id="_tips-block">
            <div className="narrow-wrapper tips-block-wtapper">
              <h3 id="_tips-block-title" className="main-title">Tips for effective educational videos on Renderforest blog</h3>
              <div className="figure-wrapper">
                <figure>
                  <div className="img-wrapper">
                    <img src={Tips} alt="Tips" />
                  </div>
                    <figcaption>
                      <p className="sub-title">How to Make Animated Educational Videos and Presentations?</p>
                    </figcaption>
                </figure>
              </div>
              <div className="btn-wrapper">
                <Link to="#" className="button dark-btn sign-up-btn">Sign Up</Link>
              </div>
            </div>
          </section>
         );
    }
}
 
export default TipsBlock;
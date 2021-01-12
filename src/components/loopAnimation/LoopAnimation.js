import React, { Component } from 'react';
import './LoopAnimation.scss';
import Bbc from '../../assets/logos/BBC.svg';
import Bose from '../../assets/logos/Bose.svg';
import Cambridge from '../../assets/logos/Cambridge.svg';
import Ericsson from '../../assets/logos/Ericsson.svg';
import Sony from '../../assets/logos/Sony.svg';
import Vodafone from '../../assets/logos/Vodafone.svg';


class LoopAnimation extends Component {
    state = { 
        brands: [
            {id: 1, name: Cambridge},
            {id: 2, name: Bose},
            {id: 3, name: Bbc},
            {id: 4, name: Vodafone},
            {id: 5, name: Ericsson},
            {id: 6, name: Sony},
            {id: 7, name: Cambridge},
            {id: 8, name: Bose},
            {id: 9, name: Bbc},
            {id: 10, name: Vodafone},
            {id: 11, name: Ericsson},
            {id: 12, name: Sony}
        ],
     }
    render() {
        const { brands } = this.state;
        return ( 
            <div className="loop-animation-block">
                <p className="loop-animation-title">Used by</p>
              <div className="loop-animation-wrapper">
                  {
                      brands.map(brand => <img key={brand.id} src={brand.name} alt="Brand" />)
                  }
              </div>
            </div>
         );
    }
}
 
export default LoopAnimation;
import React, { Component } from 'react';
import './ScrollToTop.scss';
import { Link } from 'react-router-dom';
import AngleUp from '../../assets/icons/arrow-up.svg';

class ScrollToTop extends Component {
    state = { 
        lastScrollY: 0,
        isVisible: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { lastScrollY } = this.state;

        this.setState({ lastScrollY: window.scrollY});
        lastScrollY > 1750 ? this.setState({ isVisible: true}) : this.setState({ isVisible: false});
        // console.log("Scrolling!", lastScrollY);
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    
    render() {
        const { isVisible } = this.state;
        return ( 
            
            isVisible ?
            <div className="scroll-to-top-btn">
                <Link to="#_main-banner" onClick={ () => this.scrollToTop() } >
                    <img src={AngleUp} alt="Angle Up"/>
                </Link>
            </div> : null
         );
    }
}
 
export default ScrollToTop;
import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/logos/logo.png';
import LogoSmall from '../../assets/logos/logo-small.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
    state = { 
        width: null,
        isOpenMenu: true,
        navLinks: [
                {id: 1, name: `Make Logo`},
                {id: 2, name: `Create Video`},
                {id: 3, name: `Edit Mockup`},
                {id: 4, name: `Build Website`},
                {id: 5, name: `Design Graphics`},
        ]
     }

    toggleMenu = () => {
        this.setState({
            isOpenMenu: !this.state.isOpenMenu
        });
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth}, function () {
            if(this.state.width >= 992){
                this.setState({
                    isOpenMenu: true
                });
                // console.log("d",this.state.width);
                // console.log("d",this.state.isOpenMenu);
            } else {
                this.setState({
                    isOpenMenu: false
                })
                // console.log("m", this.state.width);
                // console.log("m",this.state.isOpenMenu);
            }
        });
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    
    render() { 
        const { width, isOpenMenu, navLinks } = this.state;
    
        return (
            <div className="wide-wrapper">
                <header>
                    <div className="brand-logo">
                        
                        <Link key="logo" to="/">
                            <img className="desktop-logo"  src={Logo} alt="Logo"/>
                            <img className="mobile-logo" src={LogoSmall} alt="Logo"/>
                        </Link>
                        
                    </div>
                    <div className="mobile-btn" onClick={this.toggleMenu}>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>
    
                    <nav className={width >= 992 ? "" : "mobile-menu"}
                        style={isOpenMenu ? {display: "flex"} : {display: "none"}}>
                        <ul>
                            {
                                navLinks.map(navItem => <li key={navItem.id}>
                                    <Link key={`link_${navItem.id}`} to="#">{navItem.name}</Link></li>)
                            }
                        </ul>

                        <div>
                            <ul>
                                <li key="_pricing" id="_pricing">
                                    <Link key="_pricing-link" to="#">Pricing</Link>
                                </li>
                                <li key="_explore" className="dropdown-link">
                                    <Link key="_explore-link" to="#">
                                        <div className="dropdown-link-wrapper">
                                            <span className="dropdown-link-name">Explore</span>
                                            <span className="dropdown-link-caret">
                                                <FontAwesomeIcon icon={faAngleDown}/>
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li key="_signIn">
                                    <Link key="_signIn-link" to="#">Sign in</Link>
                                </li>
                                <li key="_lang" className="dropdown-link">
                                    <Link key="_lang" to="#">
                                        <div className="dropdown-link-wrapper">
                                            <span className="dropdown-link-name">EN</span>
                                            <span className="dropdown-link-caret">
                                                <FontAwesomeIcon icon={faAngleDown}/>
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
         );
    }
}
 
export default Header;
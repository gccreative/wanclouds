import React from 'react'
import Link from 'gatsby-link'
import { HashLink } from "react-router-hash-link";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { slide as Menu } from 'react-burger-menu'

import './header.css'

import NavIcon from '../nav-icon/nav-icon'

import logo from '../../assets/LOGO-LANDINGPAGE-WANCLOUDS.png'
import home from '../../assets/HOME_MENU-ICON-01-WANCLOUDS.png'
import about from '../../assets/HOME_MENU-ICON-about-WANCLOUDS.png'
import news from '../../assets/HOME_MENU-ICON-04-WANCLOUDS.png'
import business from '../../assets/HOME_MENU-ICON-02-WANCLOUDS.png'
import contact from '../../assets/HOME_MENU-ICON-05-WANCLOUDS.png'
import custom from '../../assets/HOME_MENU-ICON-03-WANCLOUDS.png'
import homeHover from '../../assets/HOME_MENU-ICON-01-WANCLOUDS-HOVER.png'
import aboutHover from '../../assets/HOME_MENU-ICON-about-WANCLOUDS-hover.png'
import newsHover from '../../assets/HOME_MENU-ICON-04-WANCLOUDS-HOVER.png'
import businessHover from '../../assets/HOME_MENU-ICON-02-WANCLOUDS-HOVER.png'
import contactHover from '../../assets/HOME_MENU-ICON-05-WANCLOUDS-HOVER.png'
import customHover from '../../assets/HOME_MENU-ICON-03-WANCLOUDS-HOVER.png'

class Header extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  showSettings (event) {
    event.preventDefault();
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // componentDidMount() {
  //   // Decode entities in the URL
  //   // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
  //   window.location.hash = window.decodeURIComponent(window.location.hash);
  //   const scrollToAnchor = () => {
  //     const hashParts = window.location.hash.split('#');
  //     if (hashParts.length > 2) {
  //       const hash = hashParts.slice(-1)[0];
  //       document.querySelector(`#${hash}`).scrollIntoView();
  //     }
  //   };
  //   scrollToAnchor();
  //   window.onhashchange = scrollToAnchor;
  // }

  render() {
      return (
      <div className="header" id="home">
        <div className="logo">
          <Link to='/'>
          <img src={logo} alt="logo" className="logo-image"/>
          </Link>
        </div>
        <div className="nav">
            <AnchorLink href='#home'>
              <NavIcon name="Home" image={home} hoverImage={homeHover}/>
            </AnchorLink> 
            <HashLink to='/#about-us'>
              <NavIcon name="About" image={about} hoverImage={aboutHover}/>
            </HashLink> 
            <HashLink to='/#business'>
              <NavIcon name="Professional Services" image={business} hoverImage={businessHover}/>
            </HashLink> 
            <HashLink to='/#custom' scroll={el => el.scrollIntoView({ offset: '0.5' })}>
              <NavIcon name="Custom Solutions" image={custom} hoverImage={customHover}/>
            </HashLink>
            <Link to="/blog/">
              <NavIcon name="News" image={news} hoverImage={newsHover}/>
            </Link>
            <HashLink to='/#contact'>
              <NavIcon name="Contact" image={contact} hoverImage={contactHover}/>
            </HashLink>
        </div>
        <div className="nav-mobile">
          <Menu right width={ '100%' } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
            <AnchorLink href='#home' onClick={() => this.closeMenu()}>
              <h4>HOME</h4>
            </AnchorLink> 
            <HashLink to='/#business' onClick={() => this.closeMenu()}>
              <h4>BUSINESS</h4>
            </HashLink> 
            <HashLink to='/#custom' scroll={el => el.scrollIntoView({ offset: '0.5' })} onClick={() => this.closeMenu()}>
              <h4>CUSTOM SOLUTIONS</h4>
            </HashLink>
            <Link to="/blog/">
              <h4>NEWS</h4>
            </Link>
            <HashLink to='/#contact' onClick={() => this.closeMenu()}>
              <h4>CONTACT</h4>
            </HashLink>
          </Menu> 
        </div>
      </div>
    )
  }
}

export default Header

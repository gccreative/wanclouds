import React from 'react'
import Link from 'gatsby-link'
import { HashLink } from "react-router-hash-link";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { slide as Menu } from 'react-burger-menu'

import './header-blog.css'

import NavIcon from '../nav-icon-blog/nav-icon-blog'

import logo from '../../assets/Blog/LOGO-BLOG-WANCLOUDS.png'
import home from '../../assets/Blog/BLOG-PRINCIPAL_ICON-01-WANCLOUDS.png'
import about from '../../assets/Blog/BLOG-PRINCIPAL_ICON-about-WANCLOUDS.png'
import news from '../../assets/Blog/BLOG-PRINCIPAL_ICON-04-WANCLOUDS.png'
import business from '../../assets/Blog/BLOG-PRINCIPAL_ICON-02-WANCLOUDS.png'
import contact from '../../assets/Blog/BLOG-PRINCIPAL_ICON-05-WANCLOUDS.png'
import custom from '../../assets/Blog/BLOG-PRINCIPAL_ICON-03-WANCLOUDS.png'
import homeHover from '../../assets/Blog/BLOG-PRINCIPAL_ICON-01-WANCLOUDS-HOVER.png'
import aboutHover from '../../assets/Blog/BLOG-PRINCIPAL_ICON-about-WANCLOUDS-hover.png'
import newsHover from '../../assets/Blog/BLOG-PRINCIPAL_ICON-04-WANCLOUDS-HOVER.png'
import businessHover from '../../assets/Blog/BLOG-PRINCIPAL_ICON-02-WANCLOUDS-HOVER.png'
import contactHover from '../../assets/Blog/BLOG-PRINCIPAL_ICON-05-WANCLOUDS-HOVER.png'
import customHover from '../../assets/Blog/BLOG-PRINCIPAL_ICON-03-WANCLOUDS-HOVER.png'

class HeaderBlog extends React.Component { 

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


  render() {
    return(
      <div className="header">
        <div className="logo">
          <Link to='/'>
            <img src={logo} alt="logo" className="logo-image"/>
          </Link>
        </div>
        <div className="nav">
          <Link to='/'>
            <NavIcon name="Home" image={home} hoverImage={homeHover}/>
          </Link>
          <HashLink to='/#about-us'>
              <NavIcon name="About" image={about} hoverImage={aboutHover}/>
          </HashLink>  
          <HashLink smooth to='/#business'>
            <NavIcon name="Professional Services" image={business} hoverImage={businessHover}/>
          </HashLink> 
          <HashLink smooth to='/#custom'>
            <NavIcon name="Custom Solutions" image={custom} hoverImage={customHover}/>
          </HashLink>
          <Link to="/blog/">
            <NavIcon name="News" image={news} hoverImage={newsHover}/>
          </Link>
          <AnchorLink href='#contact'>
            <NavIcon name="Contact" image={contact} hoverImage={contactHover}/>
          </AnchorLink> 
        </div>
        <div className="nav-mobile" id="blog">
              <Menu right width={ '100%' } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                <Link to='/' onClick={() => this.closeMenu()}>
                  <h4>HOME</h4>
                </Link> 
                <HashLink smooth to='/#about-us' onClick={() => this.closeMenu()}>
                  <h4>ABOUT</h4>
                </HashLink> 
                <HashLink smooth to='/#business' onClick={() => this.closeMenu()}>
                  <h4>PROFESSIONAL SERVICES</h4>
                </HashLink> 
                <HashLink smooth to='/#custom' onClick={() => this.closeMenu()}>
                  <h4>CUSTOM SOLUTIONS</h4>
                </HashLink>
                <Link to="/blog/">
                  <h4>NEWS</h4>
                </Link>
                <AnchorLink href='#contact' onClick={() => this.closeMenu()}>
                  <h4>CONTACT</h4>
                </AnchorLink>
              </Menu>
          </div>
      </div>
    )
  }
}

export default HeaderBlog

import React from 'react'
import Link from 'gatsby-link'
import './header.css'

import logo from '../../assets/LOGO-LANDINGPAGE-WANCLOUDS.png'
import home from '../../assets/HOME_MENU-ICON-01-WANCLOUDS.png'
import news from '../../assets/HOME_MENU-ICON-04-WANCLOUDS.png'
import business from '../../assets/HOME_MENU-ICON-02-WANCLOUDS.png'
import contact from '../../assets/HOME_MENU-ICON-05-WANCLOUDS.png'
import custom from '../../assets/HOME_MENU-ICON-03-WANCLOUDS.png'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="logo">
      <img src={logo} alt="logo" className="logo-image"/>
    </div>
    <div className="nav">
      <img className="nav-logo" src={home} alt="home"/>
      <img className="nav-logo" src={business} alt="business"/>
      <img className="nav-logo" src={custom} alt="custom"/>
      <Link to="/blog/">
        <img className="nav-logo" src={news} alt="news"/>
      </Link>
      <img className="nav-logo" src={contact} alt="contact"/>
    </div>
  </div>
)

export default Header

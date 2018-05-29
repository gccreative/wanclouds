import React from 'react'
import Link from 'gatsby-link'
import './header.css'

import logo from '../../assets/LOGO-LANDINGPAGE-WANCLOUDS.png'
import home from '../../assets/HOMEPAGE-WANCLOUDS_ICONO-HOME.png'
import news from '../../assets/HOMEPAGE-WANCLOUDS_ICONO-NEWS.png'
import business from '../../assets/HOMEPAGE-WANCLOUDS_ICONO-BUSINESSCONSULTING.png'
import contact from '../../assets/HOMEPAGE-WANCLOUDS_ICONO-CONTACT.png'
import custom from '../../assets/HOMEPAGE-WANCLOUDS_CUSTOMSOLUTIONS.png'

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

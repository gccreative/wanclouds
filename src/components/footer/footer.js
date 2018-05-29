import React from 'react'
import Link from 'gatsby-link'
import './footer.css'

import footerLogo from '../../assets/HOMEPAGE-WANCLOUDS-LOGO-GC-FOOTER.png'

const Footer = ({ siteTitle }) => (
  <div className="footer">
      <p>Copyright © 2018 GC CREATIVE All Rights Reserved</p>
      <img className="footer-logo" src={footerLogo} alt="home"/>
  </div>
)

export default Footer

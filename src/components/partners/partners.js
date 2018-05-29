import React from 'react'
import Link from 'gatsby-link'
import './partners.css'

import partner1 from '../../assets/HOMEPAGE-WANCLOUDS_PARTNERS-CABLE-WIRILESS.png'
import partner2 from '../../assets/HOMEPAGE-WANCLOUDS_PARTNERS-SYSCO.png'
import rightArrow from '../../assets/HOMEPAGE-WANCLOUDS_RIGHT-ICON-PARTNERS.png'
import leftArrow from '../../assets/HOMEPAGE-WANCLOUDS_LEFT-ICON-PARTNERS.png'

const Partners = ({ siteTitle }) => (
  <div className="section">
    <div className="section-heading">
      <div className="name">
        <h2>Strategic</h2>
        <h3>Partners</h3>
      </div>
      <div className="description">
        <h6>[</h6>
        <p>Our cutting edge tech and business solutions are created in partnership with:</p>
        <h6>]</h6>
      </div>
    </div>
    <div className="slider">
      <div className="arrow-left">
          <img src={leftArrow} className="arrow-image" alt=""/>
      </div>
        <div className="partner">
          <img className="partner-image" src={partner1} alt="partner"/>
        </div>
        <div className="partner">
          <img className="partner-image" src={partner2} alt="partner"/>
        </div>
        <div className="arrow-right">
          <img src={rightArrow} className="arrow-image" alt=""/>
        </div>
    </div>
    <div className="slider-indicator">
        <div className="blue-circle"></div>
        <div className="blue-circle"></div>
        <div className="blue-circle"></div>
        <div className="blue-circle"></div>
    </div>
  </div>
)

export default Partners

import React from 'react'
import Link from 'gatsby-link'
import './brands.css'

import guscolors from '../../assets/HOMEPAGE-WANCLOUDS_OURBRANDS-GUSCOLORS.png'
import wanclouds from '../../assets/HOMEPAGE-WANCLOUDS_OURBRANDS-WANCLOUDS.png'
import gccreative from '../../assets/HOMEPAGE-WANCLOUDS_OURBRANDS-GCCREATVE.png'

const Brands = ({ siteTitle }) => (
  <div className="section-brands">
    <div className="section-heading">
      <h1>Our Brands</h1>
    </div>
    <div className="brands-container">
      <div className="brand">
        <img src={guscolors} alt="brand"/>
      </div>
      <div className="brand">
        <img src={wanclouds} alt="brand"/>
      </div>
      <div className="brand">
        <img src={gccreative} alt="brand"/>
      </div>
    </div>
  </div> 
)

export default Brands

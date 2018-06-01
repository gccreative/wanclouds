import React from 'react'
import Link from 'gatsby-link'
import './profesional-services.css'

import chart from '../../assets/HOME_GRAFICA-PROFESSIONAL-SERVICES.png'
import rightArrow from '../../assets/HOME_STRATEGICPARTNERS-ICON-NEXT.png'
import leftArrow from '../../assets/HOME_STRATEGICPARTNERS-ICON-PREVIOUS.png'

const ProfessionalServices = ({ siteTitle }) => (
  <div className="services-container">
    <div id="services">
      <div className="chart">
        <img src={chart} alt="chart"/>
      </div>
      <div className="information">
        <div className="service-name">
          <h3>Professional</h3>
          <h2>Services</h2>
        </div>
        <div className="service">
          <h4>Cloud Migration</h4>
          <p>At WanClouds Miami we understand both the technical and human resource requirements
            for a software defined busines transformation, and can help your organization shift from
            physical to virtual and software-centric systems running in the cloud. The WanClouds Miami
            team will define processes and controls, determine financial applications, and complete all
            training for your staff among other tasks. Our capabilities span your entire IT lifecycle,
            and follow an easy three step process: 1. Planning, 2. Building, 3. Optimizing.
          </p>
        </div>
        <div className="arrows">
          <img src={leftArrow} alt="left"/>
          <img src={rightArrow} alt="right"/>
        </div>
      </div>
    </div>
  </div>
)

export default ProfessionalServices

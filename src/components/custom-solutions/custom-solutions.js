import React from 'react'
import Link from 'gatsby-link'
import './custom-solutions.css'

import drawing from '../../assets/HOME_ESQUEMA-CUSTOMSOLUTIONS-WANCLOUDS.png'

const CustomSolutions = ({ siteTitle }) => (
  <a href="/#custom" id="custom">
    <div className="custom-container">
      <div className="custom-name">
        <h3>Custom</h3>
        <h2>Solutions</h2>
      </div>
      <div id="custom-solutions">
        <h4>Made to Order</h4>
        <div className="description-short">
          <p>The WanClouds Miami product development team has the capability
            to design and execute bespoke solutions for busines process optimizations.
            We cover every estep of the product design cycle from concept, to desing, 
            manufacturing, logistics and application.
          </p>
        </div>
        <div className="drawing">
          <h6 className="label concept">Concept</h6>
          <h6 className="label design">Design</h6>
          <h6 className="label manufacture">Manufacture</h6>
          <h6 className="label logistics">Logistics</h6>
          <h6 className="label application">Application</h6>
          <img src={drawing} alt="drawing"/>
        </div>
        <h5>Our areas of expertise include but are not limited to:</h5>
        <div className="expertise-squres">
          <div className="expertise">
            <ul>
              <li>Service Assurance</li>
              <li>Solutions i.e. Data Centers</li>
              <li>Enterprise Application</li>
              <li>Software</li>
            </ul>
          </div>
          <div className="expertise">
            <ul>
              <li>Solutions for End-User</li>
              <li>Experiences i.e. Video</li>
              <li>Consumers, Enterprise</li>
              <li>Software Users</li>
            </ul>
          </div>
          <div className="expertise">
            <ul>
              <li>SDN, NFV & Cloud</li>
              <li>Solutions - Wired and</li>
              <li>Wireless Network Migration</li>
              <li>to Virtualized Solutions</li>
            </ul>
          </div>
          <div className="expertise">
            <ul>
              <li>Massive Data</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="expertise">
            <ul>
              <li>Professional</li>
              <li>Network Security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </a>
)

export default CustomSolutions

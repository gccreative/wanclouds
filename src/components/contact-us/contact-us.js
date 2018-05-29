import React from 'react'
import Link from 'gatsby-link'
import './contact-us.css'

import phone from '../../assets/HOMEPAGE-WANCLOUDS-CONCTACTUS-TELEPHONE.png'
import email from '../../assets/HOMEPAGE-WANCLOUDS-CONTACTUS-EMAILICON.png'
import click from '../../assets/HOMEPAGE-WANCLOUDS-CONCTACTUS-CLICKICON.png'


const ContactUs = ({ siteTitle }) => (
  <div className="section-contact">
    <div className="left">
      <h1>Contact Us</h1>
      <p>We engineer and execute cloud-based solutions for our clients. Contact our team to learn how we can start your business transformation today.</p>
      <div className="info">
        <div className="info-line">
          <img src={phone} alt="phone"/>
          <h4>(305)351-3070</h4>
        </div>
        <div className="info-line">
          <img src={email} alt="email"/>
          <h4>admin@wan-clouds.com</h4>
        </div>
      </div>
    </div>
    <div className="click">
      <img src={click} alt="click"/>
      <h4>CLICK HERE</h4>
    </div>
  </div> 
)

export default ContactUs

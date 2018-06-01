import React from 'react'
import Link from 'gatsby-link'
import './contact-us.css'

import phone from '../../assets/HOMEPAGE-WANCLOUDS-CONCTACTUS-TELEPHONE.png'
import email from '../../assets/HOMEPAGE-WANCLOUDS-CONTACTUS-EMAILICON.png'
import phoneBlog from '../../assets/BLOG-PRINCIPAL_CONTACT-CEL.png'
import emailBlog from '../../assets/BLOG-PRINCIPAL_CONTACT-EMAIL.png'
import click from '../../assets/HOMEPAGE-WANCLOUDS-CONCTACTUS-CLICKICON.png'


const ContactUs = ({ siteTitle, state }) => (
  <div className="section-contact">
    <div className={state === "blog" ? "left-blog" :"left"}>
      <h1>Contact Us</h1>
      <p>We engineer and execute cloud-based solutions for our clients. Contact our team to learn how we can start your business transformation today.</p>
      <div className="info">
        <div className="info-line">
          <img src={state === "blog" ? phoneBlog : phone} alt="phone"/>
          <h4>(305)351-3070</h4>
        </div>
        <div className="info-line">
          <img src={state === "blog" ? emailBlog : email} alt="email"/>
          <h4>admin@wan-clouds.com</h4>
        </div>
      </div>
    </div>
    <div className="click" style={state === "blog" ? {backgroundColor: "#d9dcdd"} : {backgroundColor: "#f1efef"}}>
      <form>
        <label>
          Full Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Message
          <textarea name="comment" cols="10" rows="3"></textarea>
        </label>
      </form>
    </div>
  </div> 
)

export default ContactUs

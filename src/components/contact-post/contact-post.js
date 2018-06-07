import React from 'react'
import Link from 'gatsby-link'
import './contact-post.css'

import phone from '../../assets/Blog/BLOG-POST-INTERIOR_ICON-CEL.png'
import email from '../../assets/Blog/BLOG-POST-INTERIOR_ICON-EMAIL.png'

const ContactPost = ({ siteTitle, state }) => (
  <div className="section-contact" id="contact">
    <div className="left-post">
      <h1>Contact Us</h1>
      <p>We engineer and execute cloud-based solutions for our clients. Contact our team to learn how we can start your business transformation today.</p>
    </div>
    <div className="post-contact">
      <div className="contact-clickable">
          <img src={state === "blog" ? phoneBlog : phone} alt="phone"/>
          <a href="tel:305-351-3070">
           <h4>(305)351-3070</h4>
          </a>
        </div>
        <div className="contact-clickable">
          <img src={state === "blog" ? emailBlog : email} alt="email"/>
          <a href="mailto:admin@wan-clouds.com">
            <h4>admin@wan-clouds.com</h4>
          </a>
      </div>
    </div>
  </div> 
)

export default ContactPost

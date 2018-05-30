import React from 'react'
import Link from 'gatsby-link'
import './header-blog.css'

import logo from '../../assets/Blog/LOGO-BLOG-WANCLOUDS.png'
import home from '../../assets/Blog/blog-icon-home-wanclouds.png'
import news from '../../assets/Blog/blog-icon-news-wanclouds.png'
import business from '../../assets/Blog/blog-icon-business-wanclouds.png'
import contact from '../../assets/Blog/blog-icon-contact-wanclouds.png'
import custom from '../../assets/Blog/blog-icon-customsolutions-wanclouds.png'

const HeaderBlog = ({ siteTitle }) => (
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

export default HeaderBlog

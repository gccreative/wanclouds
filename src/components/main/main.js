import React from 'react'
import Link from 'gatsby-link'
import './main.css'

import cloud from '../../assets/HOME_NUBE-SLOGAN-WANCLOUDS.png'

const Main = ({ siteTitle }) => (
  <div className="main">
    <div className="text">
      <h5>Business evolution</h5>
      <span><h5>through the</h5><h1>CLOUD.</h1></span> 
    </div>
    <img id="cloud" src={cloud} alt="cloud"/>
    <div className="white-circle1"></div>
    <div className="white-circle2"></div>
    <div className="white-circle3"></div>
    <div className="white-circle4"></div>
    <div className="white-circle5"></div>
    <div className="white-circle6"></div>
    <div className="white-circle7"></div>
  </div>
)

export default Main

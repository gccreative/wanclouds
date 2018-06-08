import React from 'react'
import Link from 'gatsby-link'

import './main.css'

import cloud from '../../assets/HOME_NUBE-SLOGAN-WANCLOUDS.png'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  move = () => {
    const divs =  document.getElementsByClassName("animated");
    for (var i = 0; i < divs.length; i++) {
      const moveByY = (this.props.position.y - divs[i].offsetTop) + divs[i].clientHeight/2;
      const moveByX = (this.props.position.x - divs[i].offsetLeft);
      divs[i].style.transform = `translate(${moveByX/100}%, ${moveByY/100}%)`;
    }

    const cloud = document.getElementById("cloud");
    const moveCloudByY = (this.props.position.y - cloud.offsetTop) + cloud.clientHeight/2;
    const moveCloudByX = (this.props.position.x - cloud.offsetLeft);
    cloud.style.transform = `translate(${moveCloudByX/100}%, ${moveCloudByY/100}%)`;
  }

  render() {
    return (
    <div className="main" onMouseMove={() => this.move()}>
      <div className="text">
        <h5>Business evolution</h5>
        <span><h5>through the</h5><h1>CLOUD.</h1></span> 
      </div>
      <img id="cloud" src={cloud} alt="cloud"/>
      <div id="white-circle1" className="animated"></div>
      <div id="white-circle2" className="animated"></div>
      <div id="white-circle3" className="animated"></div>
      <div id="white-circle4" className="animated"></div>
      <div id="white-circle5" className="animated"></div>
      <div id="white-circle6" className="animated"></div>
      <div id="white-circle7" className="animated"></div>
    </div>
    )
    }
}

export default Main

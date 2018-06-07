import React from 'react'
import Link from 'gatsby-link'
import './profesional-services.css'

import chart from '../../assets/2-HOME_GRAFICA-PROFESSIONAL-SERVICES.png'
import rightArrow from '../../assets/HOME_STRATEGICPARTNERS-ICON-NEXT.png'
import leftArrow from '../../assets/HOME_STRATEGICPARTNERS-ICON-PREVIOUS.png'

class ProfessionalServices extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      services: ["Cloud Migration", "RD Research"],
      selectedService: 0
    }
  }

  nextService = () => {
    if (this.state.selectedService === this.state.services.length - 1) {
      this.setState({
        ... this.state,
        selectedService: 0
      })
    } else {
      this.setState({
        ... this.state,
        selectedService: this.state.selectedService + 1
      })
    }
  }

  previousService = () => {
    if (this.state.selectedService === 0) {
      this.setState({
        ... this.state,
        selectedService: this.state.services.length - 1
      })
    } else {
      this.setState({
        ... this.state,
        selectedService: this.state.selectedService - 1
      })
    }
  }

  render() {
    console.log(this.state.services);
    return(
      <div className="services-container" id="business">
        <div className="service-name">
          <h3>Professional</h3>
          <h2>Services</h2>
        </div>
        <div className="changing-content">
          {this.state.services[this.state.selectedService] === "Cloud Migration" ? 
            <div id="services">
              <div className="chart">
                <img src={chart} alt="chart"/>
              </div>
              <div className="information">
                <div className="service">
                  <h4>Cloud Migration</h4>
                  <p>At WanClouds Miami we understand both the technical and human resource requirements for a software defined business
                    transformation, and can help your organization shift from physical to virtual and software-centric systems running 
                    in the cloud. The WanClouds Miami team will define processes and controls, determine financial applications, and 
                    complete all training for your staff among other tasks. Our capabilities span your entire IT lifecycle, and follow 
                    an easy three step process: 1. Planning, 2. Building, 3. Optimizing.</p>
                </div>
              </div>
            </div>       
          : 
            <div className="services-two">
              <div className="service-two-desc">
                <h4>R&D Boost</h4>
                <div className="description-short-two">
                  <p>For clients focused on research and development of new products, WanClouds Miami can provide consulting services 
                    and staff expertise, engaging with your R&D team at any point in your design cycle. This allows your team to focus
                    on their specific areas of expertise, resulting in a more efficient use of R&D dollars and more rapid design completion
                    and turnover. This is key when looking to enter new markets, expand current ones, or win new accounts. 
                  </p>
                </div>
              </div>
              <h5>Our areas of expertise include but are not limited to:</h5>
              <div className="expertise-squres">
                <div className="expertise-yellow">
                  <ul>
                    <li>Development of software ZenPacks to unify, enhance and extend monitoring for edge routing, demarcation devices, wireless base stations among others. </li>
                  </ul>
                </div>
                <div className="expertise-yellow">
                  <ul>
                    <li>Building customized
    solutions and developing superior products to replace critical out of date software as part of a primary business function.  </li>
                  </ul>
                </div>
                <div className="expertise-yellow">
                  <ul>
                    <li>Design and integration of SDK software players such as Android and IOS for use in superior video monitoring solutions.</li>
                  </ul>
                </div>
                <div className="expertise-yellow">
                  <ul>
                    <li>Functionality enhancement software development for leading open architecture Unified Monitoring
                    Systems. </li>
                  </ul>
                </div>
              </div>
            </div>        
          }
        </div>
        <div className="arrows-services">
          <img src={leftArrow} alt="left" onClick={() => this.previousService()}/>
          <img src={rightArrow} alt="right" onClick={() => this.nextService()}/>
        </div>
      </div>
    )
  }
}

export default ProfessionalServices

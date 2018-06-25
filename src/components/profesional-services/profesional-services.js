import React from 'react'
import posed, { PoseGroup } from 'react-pose'

import './profesional-services.css'

import Expertise from '../expertise/expertise'

import chart from '../../assets/2-HOME_GRAFICA-PROFESSIONAL-SERVICES.png'
import rightArrow from '../../assets/HOME_STRATEGICPARTNERS-ICON-NEXT.png'
import leftArrow from '../../assets/HOME_STRATEGICPARTNERS-ICON-PREVIOUS.png'

const CloudMigration = posed.div({
  enter: { 
    x: '0%',
    opacity: 1 
  },
  exit: { 
    x: '-100%',
    opacity: 0
  }
})

const RDBoost = posed.div({
  enter: { 
    x: '0%',
    opacity: 1 
  },
  exit: { 
    x: '100%',
    opacity: 0
  }
})

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
    return(
      <div className="services-container" id="business">
        <div className="service-name">
          <h3>Professional</h3>
          <h2>Services</h2>
        </div>
        <div className="changing-content">
        <PoseGroup animateOnMount={true}>
          {this.state.services[this.state.selectedService] === "Cloud Migration" ? 
              <CloudMigration id="services" key="services">
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
              </CloudMigration>
          : 
          <RDBoost className="services-two" key="services-two">
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
              <div className="expertise-squares">
                <Expertise style="expertise-yellow">
                  <ul>
                    <li>Development of software <br/> ZenPacks to unify, <br/> enhance and extend <br/> monitoring for edge <br/> routing, demarcation <br/> devices, wireless base <br/> stations among others. </li>
                  </ul>
                </Expertise>
                <Expertise style="expertise-yellow">
                  <ul>
                    <li>Building customized <br/>
    solutions and developing <br/> superior products to <br/> replace critical out of date <br/> software as part of a <br/> primary business function.</li>
                  </ul>
                </Expertise>
                <Expertise style="expertise-yellow">
                  <ul>
                    <li>Design and integration of <br/> SDK software players such <br/> as Android and IOS for use <br/> in superior video <br/> monitoring solutions.</li>
                  </ul>
                </Expertise>
                <Expertise style="expertise-yellow">
                  <ul>
                    <li>Functionality <br/> enhancement software <br/> development for leading <br/> open architecture Unified <br/> Monitoring
                    Systems. </li>
                  </ul>
                </Expertise>
              </div>
            </RDBoost>        
          }
          </PoseGroup>       
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

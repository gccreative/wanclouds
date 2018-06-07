import React from 'react'
import Link from 'gatsby-link'
import './partners.css'

import partner1 from '../../assets/HOME_PARTNERS-AMAZON-WANCLOUDS.png'
import partner2 from '../../assets/HOME_PARTNERS-MICROSOFT-WANCLOUDS.png'
import partner3 from '../../assets/HOME_PARTNERS-CISCO-WANCLOUDS.png'
import partner4 from '../../assets/HOME_PARTNERS-SOPRIS-WANCLOUDS.png'
import partner5 from '../../assets/HOME_PARTNERS-CABLE&WIRELESS-WANCLOUDS.png'
import rightArrow from '../../assets/HOME_STRATEGICPARTNERS-ICON-NEXT.png'
import leftArrow from '../../assets/HOME_STRATEGICPARTNERS-ICON-PREVIOUS.png'

class Partners extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parterns: [partner1, partner2, partner3, partner4, partner5],
      selectedPartnerOne: 0,
      selectedPartnerTwo: 1
    }
  }
  
  nextPartners = () => {
    if (this.state.selectedPartnerTwo === 4) {
      this.setState({
        ... this.state,
        selectedPartnerOne: 0,
        selectedPartnerTwo: 1
      })
    } else {
      this.setState({
        ... this.state,
        selectedPartnerOne: this.state.selectedPartnerOne + 1,
        selectedPartnerTwo: this.state.selectedPartnerTwo + 1,
      })
    }
  }
  
  previousPartners = () => {
    if (this.state.selectedPartnerOne === 0) {
      this.setState({
        ... this.state,
        selectedPartnerOne: 3,
        selectedPartnerTwo: 4
      })
    } else {
      this.setState({
        ... this.state,
        selectedPartnerOne: this.state.selectedPartnerOne - 1,
        selectedPartnerTwo: this.state.selectedPartnerTwo - 1,
      })
    }
  }

  render() {
      return(
        <div className="section">
          <div className="section-heading">
            <div className="name">
              <h2>Strategic</h2>
              <h3>Partners</h3>
            </div>
            <div className="description">
              <h6>[</h6>
              <p>Our cutting edge tech and business solutions are created in partnership with:</p>
              <h6>]</h6>
            </div>
          </div>
          <div className="slider">
            <div className="arrow-left" onClick={() => this.previousPartners()}>
                <img src={leftArrow} className="arrow-image" alt="arrow"/>
            </div>
              <div className="partner-one">
                <img className="partner-image" src={this.state.parterns[this.state.selectedPartnerOne]} alt="partner"/>
              </div>
              <div className="partner-two">
                <img className="partner-image" src={this.state.parterns[this.state.selectedPartnerTwo]} alt="partner"/>
              </div>
              <div className="arrow-right" onClick={() => this.nextPartners()}>
                <img src={rightArrow} className="arrow-image" alt="arrow"/>
              </div>
          </div>
          <div className="slider-indicator">
              <div className="blue-circle"></div>
              <div className="blue-circle"></div>
              <div className="blue-circle"></div>
              <div className="blue-circle"></div>
          </div>
      </div>
      );
  }
}

export default Partners

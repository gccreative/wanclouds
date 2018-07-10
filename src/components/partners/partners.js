import React from 'react'
import posed from 'react-pose'

import './partners.css'

import partner1 from '../../assets/HOME_PARTNERS-AMAZON-WANCLOUDS.png'
import partner2 from '../../assets/HOME_PARTNERS-MICROSOFT-WANCLOUDS.png'
import partner3 from '../../assets/HOME_PARTNERS-SOPRIS-WANCLOUDS.png'
import rightArrow from '../../assets/HOME_STRATEGICPARTNERS-ICON-NEXT.png'
import leftArrow from '../../assets/HOME_STRATEGICPARTNERS-ICON-PREVIOUS.png'

const PartnerMobile = posed.div({
  idle: { 
    width: "72vw",
    height: "72vw",
    flip: true
   },
  hovered: { 
    width: "74vw",
    height: "74vw",
    flip: true
   }
});

const Partner = posed.div({
  idle: { 
    width: "30vw",
    height: "29vw",
    flip: true
   },
  hovered: { 
    width: "33vw",
    height: "32vw",
    flip: true
   }
});

const Indicator = posed.div({
  idle: {
    scale: 1
  },
  active: {
    scale: 1.3
  }
})

class Partners extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parterns: [partner1, partner2, partner3],
      selectedPartnerOne: 0,
      selectedPartnerTwo: 1
    }
  }
  
  nextPartners = () => {
    if (this.state.selectedPartnerTwo === this.state.parterns.length - 1) {
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
        selectedPartnerOne: this.state.parterns.length - 2,
        selectedPartnerTwo: this.state.parterns.length - 1
      })
    } else {
      this.setState({
        ... this.state,
        selectedPartnerOne: this.state.selectedPartnerOne - 1,
        selectedPartnerTwo: this.state.selectedPartnerTwo - 1,
      })
    }
  }
  
  mobileNext = () => {
    if (this.state.selectedPartnerTwo === this.state.parterns.length) {
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
  
  mobilePrevious = () => {
    if (this.state.selectedPartnerOne === 0) {
      this.setState({
        ... this.state,
        selectedPartnerOne: this.state.parterns.length - 1,
        selectedPartnerTwo: this.state.parterns.length
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
              <Partner pose={this.state.selectedPartnerOne % 2 ? "hovered" : "idle"} className="partner-one">
                  <img className="partner-image" src={this.state.parterns[this.state.selectedPartnerOne]} alt="partner"/>
              </Partner>
              <Partner pose={this.state.selectedPartnerTwo % 2 == 0 ? "idle" : "hovered"} className="partner-one">
                <img className="partner-image" src={this.state.parterns[this.state.selectedPartnerTwo]} alt="partner"/>
              </Partner>
              <div className="arrow-right" onClick={() => this.nextPartners()}>
                <img src={rightArrow} className="arrow-image" alt="arrow"/>
              </div>
          </div>
          <div className="slider-mobile">
            <div className="arrow-left" onClick={() => this.mobilePrevious()}>
                <img src={leftArrow} className="arrow-image" alt="arrow"/>
            </div>
              <PartnerMobile pose={this.state.selectedPartnerOne % 2 ? "hovered" : "idle"} className="partner-one">
                  <img className="partner-image" src={this.state.parterns[this.state.selectedPartnerOne]} alt="partner"/>
              </PartnerMobile>
              <div className="arrow-right" onClick={() => this.mobileNext()}>
                <img src={rightArrow} className="arrow-image" alt="arrow"/>
              </div>
          </div>
          {/* <div className="slider">
            <div className="arrow-left" onClick={() => this.previousPartners()}>
                <img src={leftArrow} className="arrow-image" alt="arrow"/>
            </div>
              <div className={this.state.selectedPartnerOne % 2 ? "partner-one big" : "partner-one"}>
                <img className="partner-image" src={this.state.parterns[this.state.selectedPartnerOne]} alt="partner"/>
              </div>
              <div className={this.state.selectedPartnerTwo % 2 == 0 ? "partner-two" : "partner-two big"}>
                <img className="partner-image" src={this.state.parterns[this.state.selectedPartnerTwo]} alt="partner"/>
              </div>
              <div className="arrow-right" onClick={() => this.nextPartners()}>
                <img src={rightArrow} className="arrow-image" alt="arrow"/>
              </div>
          </div> */}
          <div className="slider-indicator">
              <Indicator className="blue-circle" 
                         pose={this.state.selectedPartnerOne === 0 || this.state.selectedPartnerTwo === 0 ? 
                              "active" : "idle"} />
              <Indicator className="blue-circle" 
                         pose={this.state.selectedPartnerOne === 1 || this.state.selectedPartnerTwo === 1 ? 
                              "active" : "idle"} />
              <Indicator className="blue-circle" 
                         pose={this.state.selectedPartnerOne === 2 || this.state.selectedPartnerTwo === 2 ? 
                              "active" : "idle"} />
          </div>
      </div>
      );
  }
}

export default Partners

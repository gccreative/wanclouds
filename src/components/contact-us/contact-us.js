import React from 'react'
import './contact-us.css'

import phone from '../../assets/HOMEPAGE-WANCLOUDS-CONCTACTUS-TELEPHONE.png'
import email from '../../assets/HOMEPAGE-WANCLOUDS-CONTACTUS-EMAILICON.png'
import phoneBlog from '../../assets/BLOG-PRINCIPAL_CONTACT-CEL.png'
import emailBlog from '../../assets/BLOG-PRINCIPAL_CONTACT-EMAIL.png'

class ContactUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        formSent: false,
        emailSuccess: false,
        error: false,
        name: "", 
        email: "", 
        message: ""
    }
  }

  emailSuccess = () => {
    this.setState({... this.state, emailSuccess: true })
    console.log(this.state);
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  sendEmail = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.emailSuccess())
      .catch(error => alert("ERROOOOOOOR"));

    e.preventDefault();

    // this.setState({...this.state, formSent: true})
    // setTimeout(this.emailSuccess, 2000)
    // clearInterval(wait);
  }

  render() {
    return(
      <div className="section-contact" id="contact">
        <div className={this.props.state === "blog" ? "left-blog" :"left"}>
          <h1>Contact Us</h1>
          <p>We engineer and execute cloud-based solutions for our clients. Contact our team to learn how we can start your business transformation today.</p>
          <div className="info">
            <div className="info-line">
              <img src={this.props.state === "blog" ? phoneBlog : phone} alt="phone"/>
              <a href="tel:305-351-3070">
              <h4>(305)351-3070</h4>
              </a>
            </div>
            <div className="info-line">
              <img src={this.props.state === "blog" ? emailBlog : email} alt="email"/>
              <a href="mailto:admin@wan-clouds.com">
                <h4>admin@wan-clouds.com</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="click" style={this.props.state === "blog" ? {backgroundColor: "#d9dcdd"} : {backgroundColor: "#f1efef"}}>
        { this.state.error ? <div className="thank-you">    
                    <h4>There was an error sending the Email, please try again.</h4>
                </div> : null}
                {(this.state.formSent && this.state.emailSuccess) ? (
                <div className="thank-you">    
                    <h2>Thank you for your message!</h2> <br/> <h4>We will reply to your email shortly.</h4>
                </div>
                )
                : (this.state.formSent && !this.state.emailSuccess) ? (
                <div className="thank-you">   
                    <h4>Sending message...</h4>
                </div>
                ) :
                (<form onSubmit={this.handleSubmit}>
                  <label>
                    Full Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                  </label>
                  <label>
                    Email:
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                  </label>
                  <label>
                    Message
                    <textarea name="message" cols="10" rows="3" value={this.state.message} onChange={this.handleChange}></textarea>
                  </label>
                  <button type="submit">SEND</button>
                </form>) }
        </div>
      </div>
    )
  }
}

export default ContactUs

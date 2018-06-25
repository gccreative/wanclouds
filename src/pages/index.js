import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ReactCursorPosition from 'react-cursor-position'
import { Parallax, ParallaxLayer } from 'react-spring'

import '../layouts/base.css'

import Header from '../components/header/header'
import AboutUs from '../components/about-us/about-us'
import Partners from '../components/partners/partners'
import Main from '../components/main/main'
import ContactUs from '../components/contact-us/contact-us';
import Footer from '../components/footer/footer';
import ProfessionalServices from '../components/profesional-services/profesional-services';
import CustomSolutions from '../components/custom-solutions/custom-solutions';
import News from '../components/news/news';

import bg from '../assets/HOME-BG.jpg'

class RootIndex extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      transform: 0
    }
    this.myRef = React.createRef();
  }

  componentDidMount() {
    document.body.style.background = "url(" + bg + ")";
    window.addEventListener('scroll', this.handleScroll, true);
    console.log(this.myRef.current)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = () => {
    let windowScroll = window.scrollY;
    let scrollTop = event.srcElement.body.scrollTop,
    itemTranslate = -1 * windowScroll/10;
    console.log(itemTranslate);

    this.setState({
      transform: itemTranslate
    });
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulPost.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')

    console.log(posts);

    return (
      // <Parallax pages={7} ref={ref => this.parallax = ref}>
        <div>
          <Helmet
            title={siteTitle}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header siteTitle={siteTitle}/>
          <div className="content-container">
            {/* <ParallaxLayer offset={0.05} speed={0.1} onScroll={e => e.stopPropagation()}> */}
              <div className="parallax-container" style={{transform: 'translateY(' + this.state.transform + 'px)'}} ref={this.myRef}>
                <div className="sphere" id="about"></div>
                <div className="sphere" id="strategic"></div>
                <div className="sphere" id="partners"></div>
                <div className="sphere" id="profesional"></div>
                <div className="sphere" id="custom-sol"></div>
                <div className="sphere" id="right"></div>
                <div className="sphere" id="news"></div>
                <div className="sphere" id="last"></div>
              </div>
            {/* </ParallaxLayer> */}
            {/* <ParallaxLayer offset={0} onScroll={e => e.stopPropagation()}> */}
              <ReactCursorPosition>
                <Main/>
              </ReactCursorPosition>
              <AboutUs/>
              <Partners/>
              <ProfessionalServices />
              <CustomSolutions />
              <News post={posts[0].node}/>
              <ContactUs/>
              <Footer color="light"/>
            {/* </ParallaxLayer> */}
          </div>
        </div>
      // </Parallax>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          author {
            name
            shortBiography {
              childMarkdownRemark {
                html
              }
            }
            photo {
              file {
                url
              }
            }
          }
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          subtitle
          mainPhoto {
            file {
              url
            }
          }
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    } 
  }`
//     allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
//       edges {
//         node {
//           name
//           shortBio {
//             shortBio
//           }
//           title
//           image {
//             file {
//               url
//               fileName
//               contentType
//             }
//           }
//         }
//       }
//     }
//   }
// `

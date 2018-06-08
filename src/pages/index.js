import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ReactCursorPosition from 'react-cursor-position';

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

  componentDidMount() {
    document.body.style.background = "url(" + bg + ")"
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulPost.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')

    console.log(posts);

    return (
      <div>
        <Helmet
          title={siteTitle}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={siteTitle} />
        <div className="content-container">
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
        </div>
      </div>
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

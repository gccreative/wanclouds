import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import './blog.css'

import ArticlePreview from '../components/article-preview'
import HeaderBlog from '../components/header-blog/header-blog'
import ContactUs from '../components/contact-us/contact-us'
import Footer from '../components/footer/footer'

import title from '../assets/Blog/BLOG-TITLE.png'
import bg from '../assets/Blog/BLOG-PRINCIPAL-BG.png'

class BlogIndex extends React.Component {

  getNode(array) {
    let nodes = [];
    array.forEach(post => {
      nodes.push(post.node);
    })
    return nodes;
  }

  removeDuplicates( arr, prop ) {
    let obj = {};
    return Object.keys(arr.reduce((prev, next) => {
      if(!obj[next[prop]]) obj[next[prop]] = next; 
      return obj;
    }, obj)).map((i) => obj[i]);
  }

  componentWillMount() {
    document.body.style.background = "url(" + bg + ")"
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const postsRaw = get(this, 'props.data.allContentfulPost.edges')
    const postsNodes = this.getNode(postsRaw);
    const posts = this.removeDuplicates(postsNodes, 'slug');

    console.log(posts);

    return (
      <div className="background">
        <Helmet title={siteTitle} />
        <HeaderBlog />
        <img id="title" src={title} alt="title"/>
        <div className="title-space" />
        <div className="wrapper">
          <ul className="article-list">
            {posts.map((node, i) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} index={i}/>
                </li>
              )
            })}
          </ul>
        </div>
        <ContactUs state="blog"/>
        <Footer color="dark"/>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
query BlogIndexQuery {
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

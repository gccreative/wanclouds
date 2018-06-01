import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './blog-post.css'

import HeaderBlog from '../components/header-blog/header-blog'
import Author from '../components/author/author'

import title from '../assets/Blog/BLOG-TITLE.png'
import bg from '../assets/Blog/BG-BLOG-INTERIOR-WANCLOUDS.png'

class BlogPostTemplate extends React.Component {

  componentWillMount() {
    document.body.style.background = "url(" + bg + ")"
  }

  render() {
    const post = get(this.props, 'data.contentfulPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className="container">
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <HeaderBlog />
        <img id="title" src={title} alt="title"/>
        <div className="title-space" />
        <div className="wrapper">
          <div className="blog-content">
            <h1 className="section-headline">{post.title}</h1>
            <h4 className="section-headline">{post.subtitle}</h4>
            <small> By: {post.author.name}</small>
            <div className="main-photo">
              <img
                src={`${post.mainPhoto.file.url}?w=1180&h=400&fit=fill`}
                alt=""
              />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
        <Author author={post.author} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
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
`

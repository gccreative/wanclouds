import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';
import Disqus from 'disqus-react';

import './blog-post.css'

import HeaderBlog from '../components/header-blog/header-blog'
import Author from '../components/author/author'
import ContactPost from '../components/contact-post/contact-post'
import Footer from '../components/footer/footer'

import title from '../assets/Blog/BLOG-TITLE.png'
import bg from '../assets/Blog/BLOG-POST-INTERIOR-BG.jpg'
import like from '../assets/Blog/BLOG-POST-INTERIOR_LIKE-ICON.png'

class BlogPostTemplate extends React.Component {

  componentDidMount() {
    document.body.style.background = "url(" + bg + ")"
  }

  render() {
    const post = get(this.props, 'data.contentfulPost')
    const posts = get(this, 'props.data.allContentfulPost.edges')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const url = window.location.href

    const disqusShortname = "wanclouds";
    const disqusConfig = {
        url: window.location.href,
        identifier: post.slug,
        title: post.title,
    };

    console.log(disqusConfig);

    return (
      <div className="container">
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <HeaderBlog />
        <div className="centered">
          <Link to="/blog/">
            <div id="wan-journal"/>
          </Link>
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
          <div className="social">
            <div className="sharing">
              <FacebookShareButton
                  url={url}
                  quote={`${post.title} - ${post.subtitle}`}
                  className="social-button">
                  <FacebookIcon
                    size={32}
                    round={false} />
              </FacebookShareButton>
              <TwitterShareButton
                  url={url}
                  title={`${post.title} - ${post.subtitle}`}
                  via="Wanclouds"
                  className="social-button">
                  <TwitterIcon
                    size={32}
                    round={false} />
              </TwitterShareButton>
              <LinkedinShareButton
                  url={url}
                  title={`${post.title} - ${post.subtitle}`}
                  className="social-button">
                  <LinkedinIcon
                    size={32}
                    round={false} />
              </LinkedinShareButton>
            </div>
          </div>
          <div className="comments">
                <h1>Leave a comment</h1>
                {/* <form>
                  <div className="comment-box">
                    <label>
                      Full Name:
                      <input type="text" name="name" />
                    </label>
                    <label>
                      Email:
                      <input type="text" name="email" />
                    </label>
                  </div>
                  <div className="comment">
                    <label>
                      Message
                      <textarea name="comment" cols="30" rows="5"></textarea>
                    </label>
                  </div>
                </form> */}
              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
          </div>
          <ContactPost />
          <Footer color="dark"/>
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
    site {
      siteMetadata {
        title
      }
    }
  }
`

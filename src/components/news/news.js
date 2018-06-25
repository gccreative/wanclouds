import React from 'react'
import Link from 'gatsby-link'
import './news.css'

import drawing from '../../assets/HOME_ESQUEMA-CUSTOMSOLUTIONS-WANCLOUDS.png'

const News = ({ siteTitle, post }) => (
  <div className="news-container">
    <div className="news-name">
      <h3>News</h3>
    </div>
    <div id="news-solutions">
      <h4 id="author-name">Author: {post.author.name}</h4>
      <div className="description-news-short">
        <p>
          {post.author.shortBiography.childMarkdownRemark.rawMarkdownBody}
        </p>
      </div>
      <div className="article">
        <div className="preview">
          <h3>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <h4>{post.subtitle}</h4>
          <small> By: {post.author.name}</small>
          <div className="body-preview">
            <p>
              {post.body.childMarkdownRemark.rawMarkdownBody}
            </p>
          </div>
          <div className="read-more">
            <p>
              <Link to={`/blog/${post.slug}`}>Read more</Link>
            </p>
          </div>
        </div>
        <div className="preview-image">
          <div className="image-cropper">
            <img src={post.mainPhoto.file.url} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default News

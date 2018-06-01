import React from 'react'
import Link from 'gatsby-link'
import './author.css'

import phone from '../../assets/HOMEPAGE-WANCLOUDS-CONCTACTUS-TELEPHONE.png'
import email from '../../assets/HOMEPAGE-WANCLOUDS-CONTACTUS-EMAILICON.png'
import phoneBlog from '../../assets/Blog/blog-icon-email-wanclouds.png'
import emailBlog from '../../assets/Blog/blog-icon-contact-wanclouds-18.png'
import click from '../../assets/HOMEPAGE-WANCLOUDS-CONCTACTUS-CLICKICON.png'


const Author = ({ author }) => (
  <div className="author-section">
    <div className="photo">
      <div className="image-cropper">
        <img src={author.photo.file.url}/>
      </div>
    </div>
    <div className="author-info">
      <h1>Author: {author.name}</h1>
      <p
          dangerouslySetInnerHTML={{
            __html: author.shortBiography.childMarkdownRemark.html,
          }}
        />
    </div>
  </div> 
)

export default Author

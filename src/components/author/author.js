import React from 'react'
import Link from 'gatsby-link'
import './author.css'

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

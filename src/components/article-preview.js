import React from 'react'
import styles from './article-preview.css'
import Link from 'gatsby-link'

export default ({ article, index }) => {

  console.log(index);
  function isEven(n) {
    return n % 2 == 0;
 }

  return (
  <div className={isEven(index) ? "preview-container-left" : "preview-container-right"}>
    <div className="round-image">
      <div className="image-cropper">
        <img src={article.mainPhoto.file.url} alt="main-photo" />
      </div>
    </div>
    <div className={isEven(index) ? "blog-info-left" : "blog-info-right"}>
      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${article.slug}?index=${index}`}>{article.title}</Link>
      </h3>
      <h4>{article.subtitle}</h4>
      <small> By: {article.author.name}</small>
      <div className={isEven(index) ? "body-preview-left" : "body-preview-right"}>
        <p
          dangerouslySetInnerHTML={{
            __html: article.body.childMarkdownRemark.html,
          }}
        />
      </div>
      <div className={isEven(index) ? "read-more-left" : "read-more-right"}>
        <p>
          <Link to={`/blog/${article.slug}?index=${index}`}>Read more</Link>
        </p>
      </div>
    </div>
  </div>
)}

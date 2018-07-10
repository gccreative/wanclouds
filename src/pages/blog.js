import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import './blog.css'

import ArticlePreview from '../components/article-preview'
import HeaderBlog from '../components/header-blog/header-blog'
import ContactUs from '../components/contact-us/contact-us'
import Footer from '../components/footer/footer'

import title from '../assets/Blog/BLOG-TITLE.png'
import titleBlog from '../assets/Blog/BLOG-TITLE-MOBILE.png'
import bg from '../assets/Blog/BLOG-PRINCIPAL-BG.png'
import arrow from '../assets/HOME_STRATEGICPARTNERS-ICON-NEXT.png'

class BlogIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 3
    }
  }

  handleClick = (event) => {
    console.log(event.target.id);
    this.setState({
      ...this.state,
      currentPage: Number(event.target.id)
    });
  }

  nextPage = (event) => {
    this.setState({
      ...this.state,
      currentPage: this.state.currentPage + 1
    })
  }

  reset = () => {
    this.setState({
      ...this.state,
      currentPage: 1
    })
  }

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

  componentDidMount() {
    document.body.style.background = "url(" + bg + ")"
  }

  render() {
    const { currentPage, postsPerPage } = this.state;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const postsRaw = get(this, 'props.data.allContentfulPost.edges')
    const postsNodes = this.getNode(postsRaw);
    const posts = this.removeDuplicates(postsNodes, 'slug');

    console.log(posts);

    // Logic for displaying todos
    const indexOfLastpost = currentPage * postsPerPage;
    const indexOfFirstpost = indexOfLastpost - postsPerPage;
    const currentposts = posts.slice(indexOfFirstpost, indexOfLastpost);

    const renderposts = currentposts.map((post, index) => {
      return (<li key={post.slug}>
                  <ArticlePreview article={post} index={index}/>
              </li>)
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} className={this.state.currentPage === number ? "active-page" : "none"} 
            onClick={(e) => this.handleClick(e)}>
          {number}
        </li>
      );
    });


    return (
      <div className="background">
        <Helmet title={`News | ${siteTitle}`} />
        <HeaderBlog />
        <img id="title" src={title} alt="title"/>
        <img id="title-mobile" src={titleBlog} alt="title"/>
        <div className="title-space" />
        <div className="wrapper">
          { /* <ul className="article-list">
            {posts.map((node, i) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} index={i}/>
                </li>
              )
            })}
          </ul> */}
          <ul className="article-list">
            {renderposts}
            <ul id="page-numbers">
              {renderPageNumbers}
              <li>
                <img src={arrow} alt="arrow" id="page-arrow" 
                     onClick={this.state.currentPage !== pageNumbers.length ? () => this.nextPage() : this.reset}/>
              </li>
            </ul>
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
                rawMarkdownBody
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
              rawMarkdownBody
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }`

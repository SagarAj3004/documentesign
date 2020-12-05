import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Layout from "../components/layout"
class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const siteMetaData = this.props.data.site.siteMetadata

    return (
      <>
        <Layout>
          <SEO title={siteMetaData.title} />
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Layout>
      </>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

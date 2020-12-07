import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
class Post extends Component {
  render() {
    const data = this.props.data

    return (
      <>
        <Layout>
          <SEO title="Posts" />
          <h1>Posts</h1>
          {data.allWordpressPost.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={`${node.slug}`}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              {node.date}
            </div>
          ))}
        </Layout>
      </>
    )
  }
}

export default Post

export const postQuery = graphql`
  query postsQuery {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD YYYY")
        }
      }
    }
  }
`

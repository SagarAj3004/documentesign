import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
const ComponentName = ({ data }) => {
  const { content, title, description } = data.blog
  console.log('description', description);
  return (
    <Layout>
      <SEO title={title} description={description} />
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <ReactMarkdown source={content} />
          </div>
        </div>
        <div className="d-flex">
          <Link to="/blogs">Go back</Link>
        </div>
      </div>
    </Layout>
  )
}

export default ComponentName

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      slug
      title
      description
      content
    }
  }
`

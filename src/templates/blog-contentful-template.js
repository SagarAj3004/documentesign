import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ReactMarkdown from "react-markdown"

const BlogContentfulTemplate = ({ data }) => {
  const { title, description, content } = data.contentfulBlog

  const richTextDocument = JSON.parse(content.raw)

  return (
    <Layout>
      <SEO title={title} description={description.description} />
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <h2>{title}</h2>
            <div>
              <ReactMarkdown source={description.description}></ReactMarkdown>
            </div>
            {documentToReactComponents(richTextDocument)}
          </div>
        </div>
        <div className="d-flex">
          <Link to="/contentful">Go back</Link>
        </div>
      </div>
    </Layout>
  )
}

export default BlogContentfulTemplate

export const query = graphql`
  query GetContentfulSingleBlog($slug: String) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      description {
        description
      }
      content {
        raw
      }
    }
  }
`

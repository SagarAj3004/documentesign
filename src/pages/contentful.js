import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentfulBlog from "../components/contentfulBlog"

const query = graphql`
  {
    allContentfulBlog {
      nodes {
        id
        title
        slug
        description {
          description
        }
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
const Contentful = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulBlog: { nodes: blogs },
  } = data
  return (
    <>
      <Layout>
        <SEO
          title="Contenful-Blogs"
          description="this is contentful blogs page"
        />
        <div className="mt-4">
          <div className="d-flex">
            <h2 className="mx-auto">Contentful Blogs</h2>
          </div>
          {blogs.map(blog => {
            return <ContentfulBlog key={blog.id} {...blog} />
          })}
        </div>
      </Layout>
    </>
  )
}

export default Contentful

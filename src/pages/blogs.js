import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Blog from "../components/blog"
import Layout from "../components/layout"
import SEO from "../components/seo"

const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        id
        title
        slug
        content
        category
        image {
          publicURL
        }
        description
        date(formatString: "MMMM Do, YYYY")
        strapiId
      }
    }
  }
`
const Blogs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <>
      <Layout>
        <SEO title="Blogs"  description="this is blogs page"/>
        <div className="mt-4">
          <div className="d-flex">
            <h2 className="mx-auto">Blogs</h2>
          </div>
          {blogs.map(blog => {
            return <Blog key={blog.strapiId} {...blog} />
          })}
        </div>
      </Layout>
    </>
  )
}

export default Blogs

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Blog from "../components/blog"
import Layout from "../components/layout"
import SEO from "../components/seo"

const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        title
        content
        category
        image {
          absolutePath
        }
        description
        date
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
        <SEO title="Blogs" />
        <div className="mt-4">
          <div className="d-flex">
            <h2 className="mx-auto">Blogs</h2>
          </div>

          <div class="d-flex">
            {blogs.map(blog => {
              return <Blog key={blog.strapiId} blog={blog} />
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Blogs

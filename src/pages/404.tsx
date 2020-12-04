import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h4>Page not found</h4>
    <p>The page you are looking for has been removed or relocated!</p>
    <Link
      className="mt-2"
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
      Go Back
    </Link>
  </Layout>
)

export default NotFoundPage

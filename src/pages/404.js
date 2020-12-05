import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <h2 className="h1-responsive font-weight-bold my-4">Page not found</h2>
      <p className="w-responsive mx-auto mb-5">
        The page you are looking for has been removed or relocated!
      </p>
      <Link
        className="mt-2"
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        Go Back
      </Link>
    </section>
  </Layout>
)

export default NotFoundPage

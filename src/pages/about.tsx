import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default function About() {
  return (
    <>
      <Layout>
        <SEO title="About Us" />
        <section>
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            About us
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Document eSign solutions for your business Easy, secure, and
            effective solutions for your business.
          </p>
        </section>
      </Layout>
    </>
  )
}

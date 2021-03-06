import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="this is home page"/>
    <div className="mt-5">
      <h1>Document eSign solutions for your business</h1>
      <p className="h5">Easy, secure, and effective solutions for your business.</p>
    </div>
  </Layout>
)

export default IndexPage

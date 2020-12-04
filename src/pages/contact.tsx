import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default function Contact() {
  return (
    <>
      <Layout>
        <SEO title="Contact Us" />
        <section>
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>
        </section>
      </Layout>
    </>
  )
}

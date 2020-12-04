import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default function Features() {
  return (
    <>
      <Layout>
        <SEO title="Features" />
        <section>
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Product Features
          </h2>
          <div className="d-flex">
            <ul>
              <li>
                Close deals Instantly with Legally binding Electronic Signatures
              </li>
              <li>Manage your documents in any given Order</li>
              <li>
                Save time by reusing templates for Your Most Common Documents
              </li>
              <li>Flexible Sharing and tracking of your document.</li>

              <li>Track and manage the comprehensive audit trail</li>

              <li>Convert your document into a fillable pdf file</li>

              <li>Powerful API library</li>
            </ul>
          </div>
        </section>
      </Layout>
    </>
  )
}

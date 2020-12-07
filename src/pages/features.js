import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Feature from "../components/feature"
import Layout from "../components/layout"
import SEO from "../components/seo"

const query = graphql`
  {
    allStrapiFeatures {
      nodes {
        title
        subtitle
        description
        strapiId
      }
    }
  }
`
const Features = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiFeatures: { nodes: features },
  } = data
  return (
    <>
      <Layout>
        <SEO title="Features" />
        <div className="mt-4">
          <div className="d-flex">
            <h2 className="mx-auto">Features</h2>
          </div>
          {features.map(feature => {
            return <Feature key={feature.strapiId} feature={feature} />
          })}
        </div>
      </Layout>
    </>
  )
}

export default Features

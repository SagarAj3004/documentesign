import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Feature from "../components/feature"
import Layout from "../components/layout"
import SEO from "../components/seo"

const query = graphql`
  {
    strapiFeature {
      feature {
        id
        title
        subtitle
        image {
          publicURL
        }
        description
      }
      strapiId
    }
  }
`
const Features = () => {
  const data = useStaticQuery(query)
  const {
    strapiFeature: { feature: features },
  } = data
  return (
    <>
      <Layout>
        <SEO title="Features" description="this is features page"/>
        <div className="mt-4">
          <div className="d-flex">
            <h2 className="mx-auto">Features</h2>
          </div>
          {features.map((feature, index) => {
            return <Feature key={feature.id} {...feature} />
          })}
        </div>
      </Layout>
    </>
  )
}

export default Features

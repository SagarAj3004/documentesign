import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data: { about } }) => {
  const { id, title, image, description } = about
  return (
    <>
      <Layout>
        <SEO title="About" description="this is about page" />
        <div className="mt-4">
          <div className="text-center">
            <h2>{title}</h2>
            <img src={image.publicURL} height="200" alt={id} />
          </div>
          <p>{description}</p>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    about: strapiAbout {
      id
      title
      strapiId
      description
      image {
        publicURL
      }
    }
  }
`

export default About

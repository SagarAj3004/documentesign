import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "document-esign-logo-02.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 240, height: 42) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.logo?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }
  return <Img fixed={data?.logo?.childImageSharp?.fixed} />
}

export default Logo

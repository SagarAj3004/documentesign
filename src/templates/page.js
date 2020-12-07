// import React, { Component } from "react"
// import { graphql } from "gatsby"
// import SEO from "../components/seo"
// import Layout from "../components/layout"
// class Page extends Component {
//   render() {
//     const page = this.props.data.wordpressPage
//     const siteMetaData = this.props.data.site.siteMetadata
    
//     return (
//       <>
//         <Layout>
//           <SEO title={siteMetaData.title} />
//           <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
//           <div dangerouslySetInnerHTML={{ __html: page.content }} />
//         </Layout>
//       </>
//     )
//   }
// }

// export default Page

// export const pageQuery = graphql`
//   query($id: String!) {
//     wordpressPage(id: { eq: $id }) {
//       title
//       content
//     }
//     site {
//       id
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `

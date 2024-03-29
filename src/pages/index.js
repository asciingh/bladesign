import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BackgroundSection from "../components/global/backgroundsection"
import Info from "../components/Home/info"
//background image is looking for data from graphql query-
//fluid is passed in the BackgroundImage- so use that prop
const IndexPage = ({ data }) => (
  <Layout>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title=""
      styleClass="default-background"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "opening-card.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    prodmenu: allContentfulProductItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          category
          image {
            fixed(width: 50, height: 50) {
              src
            }
          }
        }
      }
    }
  }
`

export default IndexPage

import React from "react"
import {Link, graphql} from "gatsby";
import Layout from '../components/layout'
import BackgroundSection from "../components/global/backgroundsection";
import Info from "../components/Home/info";


//background image is looking for data from graphql query- 
//fluid is passed in the BackgroundImage- so use that prop
const AboutPage = ({data}) => (
    <Layout>

    <BackgroundSection img={data.img.childImageSharp.fluid} title="" styleClass="about-background"/ >  
    <Info/>  
    </Layout>
);


export const query = graphql`
{
    img: file(relativePath: {eq: "candle-about.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }`;


export default AboutPage;

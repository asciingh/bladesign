import React from 'react'
import Product from './product'
import Title from '../global/title'
import {StaticQuery, graphql} from "gatsby";


const getProducts = graphql`{
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
            fluid(maxHeight:426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }`




export default function productS() {
    return (
       <StaticQuery 
       query={getProducts}
       render={data =>{
           return (
           <section className="py-5">
               <div className="container">
               <Title title="Our Creations"/>
               <div className="row">
                   {data.prodmenu.edges.map(({node:product})=>{
                       return <Product key={product.id} product={product}/>;
                   })}
                </div>    

               </div>

           </section>
            )
       } }/>
    );
}

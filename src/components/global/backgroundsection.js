import React from 'react'
import BackgroundImage from "gatsby-background-image";
export default function backgroundsection(
    {img,styleClass,title,children}) {
    return ( <BackgroundImage className={styleClass} 
                            fluid={img}>
                                <h1 className= "title text-white text-uppercase display-4 font-weight-bold">
                                    {title}
                                    
                                </h1>
                                {children}
    </BackgroundImage> );
                            
}

backgroundsection.defaultProps ={
    title:"Fill me in",
    styleClass: "default-background"
}

import React from 'react'
import Navbar from './global/navbar'
import Footer from './global/footer'
import "./bootstrap.min.css";
import "./layout.css"



const layout = ({children}) => (
    
        <React.Fragment>
         <Navbar />   
         {children}

         <Footer />
        </React.Fragment>


       
);





export default layout;

import React, { Component } from 'react'
import Title from "../global/title";
import Img from "gatsby-image";



const getCategories = items=> {
    let tempItems = items.map(items =>{
        return items.node.category;
        
        }    
    );
    let tempCategories = new Set(tempItems);
    let categories = Array.from(tempCategories);
    categories = ['all',...categories]; //for displaying all
    return categories;
};
export default class prodmenu extends Component {
    constructor(props){
        super(props);
        
        this.state={
            items: props.items.edges,
            proditems: props.items.edges,
            categories: getCategories(props.items.edges)
        };
    }

    handleItems = category =>{
        //all-reset it
        //other- filter and add to array
        let tempItems = [...this.state.items];
        if(category === "all"){
            this.setState(()=> {
                return {proditems: tempItems}

            }
            );
        }
        else{
            let items = tempItems.filter(({node}) => node.category === category);
            this.setState(()=>{
                return {proditems:items}
            });
        }
    }
    render() {

       
        if(this.state.items.length>0)
        {
            return (
                /* the classname used here is the one in layoutcss- menu*/
            <section className="menu py-5"> 
                <div className="container">
                    <Title title="Best of Our Products"></Title>
                    {/*categories*/}
                    <div className="row mb-5">
                        <div className="col-10 mx-auto text-center">
                            {this.state.categories.map((category,index)=>{
                                return (
                                <button type="button" key={index} className="btn btn-yellow text-capitalize m-3" onClick={()=> {this.handleItems(category)}}   >
                                    {category}
                                </button>
                                )
                            }
                                )}
                        </div>
                    </div>
                    {/*items*/}
                    <div className="row">
                        {this.state.proditems.map(({node})=>{
                            return(
                            <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                <div>
                                    <Img fixed={node.image.fixed}></Img>
                                </div>
                                {/*item text*/}

                     
                                
                                
                                <div className="flex-grow-1" px-3>
                                    <div className="d-flex justify-content-between">
                                        <h6>
                                        <small>
                                            {node.title}
                                        </small>
                                        
                                        </h6>
                                    </div>

                                    <p className="text-muted">
                                        <small>
                                            {node.description.description}
                                        </small>
                                    </p>
                                </div>
                            </div>
                            )
                        }
                        )}
                    </div>
                </div>
               
            </section>
            );
        }
        
        else{
            return (
            <section className="menu py-5"> 
             <div className="container">
                <Title title="Best of our products"></Title>
                    <div className="row">
                        <div className=" col-10 sol-sm-6 mx-auto text-center text-capitalize">
                            <h1>There are no items to display</h1>
                        </div>
                </div>
                </div>
            </section>
            );
        }
       
    }
}

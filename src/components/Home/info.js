import React from 'react'
import {Link} from 'gatsby'
import Title from '../global/title'

export default function info() {
    return (
       <section className="py-5">
           <div className="container">
               <Title title="Our Story"></Title>
               <div className="row">
                <div className= "col-10 col-sm-8 mx-auto text-center">
                    <p className="lead text-muted mb-5">
                       Reprehenderit nostrud nostrud Lorem tempor esse occaecat esse mollit nostrud. Mollit velit adipisicing elit do mollit. Irure proident ut sit nostrud quis. Sint duis non ipsum velit in ut est mollit sit duis labore exercitation quis anim. Qui amet nostrud quis eu laborum exercitation. Ad labore et fugiat fugiat quis et officia et cillum amet cillum.
                    </p>
                    <Link to="/about/">
                        <button className="btn text-uppercase btn-yellow">
                            about page
                        </button>
                    </Link>
                </div>
               </div>

           </div>
       </section>
    )
}

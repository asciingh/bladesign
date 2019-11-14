import React from "react"
import { Link } from "gatsby"
import Title from "../global/title"

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              The vision of the company is to provide unique and intelligent
              design solutions to decor and interiors for homes and offices.</p>

              <p className="lead text-muted mb-5">
              When people have lack of words to express themselves they say
              "Blah Blah Blah" to plug the gap in their sentences. </p>
              
              <p className="lead text-muted mb-5">These gaps
              are where we come in to realize and recreate the clients
              imagination and successfully render solutions with innovation,
              customized to their requirements
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

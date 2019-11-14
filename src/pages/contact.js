import React from "react"
import Layout from "../components/layout"
import Title from "../components/global/title"

export default function contact() {
  return (
    <Layout>
      <section className="contact py-5">
        <Title title="contact us"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                {/*name*/}
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Prem Chopra"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                {/*email*/}
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="pchopra@email.com"
                />
              </div>




              <div className="form-group">
                <label htmlFor="productInterest">Products of Interest</label>
                {/*Products you are interested in*/}
                <input
                  type="text"
                  className="form-control"
                  name="productInterest"
                  id="productInterest"
                  placeholder="List down products you want"
                />
              </div>


              <div className="form-group">
                <label htmlFor="description">Additional Description</label>
                {/*Products additional info*/}

                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  rows="5"  
                  placeholder="Tell us about modifications you are thinking about"
                />
              </div>

              {/* submit */}
              <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5"> Submit</button>


              








            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

import React, { Component } from "react"
import logo from "../../images/bla-logo-bar.png"
import { Link } from "gatsby"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    //links here in array to ad to navbar in the future
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "About",
      },

      {
        id: 3,
        path: "/productDisplay",
        text: "Products",
      },

      {
        id: 5,
        path: "",
        text: "Artistry",
      },

      {
        id: 6,
        path: "",
        text: "Services",
      },
      {
        id: 4,
        path: "/contact",
        text: "Contact",
      },
    ],
  }

  navBarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  render() {
    //bootstrap uses classes
    //moment we reach past small screen, gpo to horizontal
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navBarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}

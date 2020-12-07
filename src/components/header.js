import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"
const Header = ({ siteTitle }) => (
  <header>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
                  color: 'white',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#1A2B3A" }}
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand"
          style={{
            textDecoration: `none`,
          }}
        >
          <Logo />
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link
              to="/"
              className="nav-link text-light"
              style={{
                textDecoration: `none`,
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/features"
              className="nav-link text-light"
              style={{
                textDecoration: `none`,
              }}
            >
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blogs"
              className="nav-link text-light"
              style={{
                textDecoration: `none`,
              }}
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

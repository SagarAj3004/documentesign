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
        <a className="navbar-brand" href="index.html">
          <Logo />
        </a>
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

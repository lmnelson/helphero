import React, { Component } from 'react'
import Link from 'gatsby-link'
import Button from './Button'

import logo04 from '../images/logo_04.svg'
import img_menu from '../images/icons8-menu.svg'

class GlobalNav extends Component {
  render() {
    return (
      <nav className="globalNav">
        <Link className="globalNav__brand" to="/">
          <img src={logo04} />
        </Link>
        <button
          className="iconButton button--secondary visible--tablet"
          onClick={this.props.toggleDrawer}
        >
          <img src={img_menu} />
        </button>
        <ul className="visible--desktop">
          <li>
            <Link to="/hero-videos" activeClassName="active">
              Hero Videos
            </Link>
          </li>
          <li>
            <Link to="/what-we-do" activeClassName="active">
              What We Do
            </Link>
          </li>
          <li>
            <Link to="/get-involved" activeClassName="active">
              Get Involved
            </Link>
          </li>
          <li>
            <Button classNames="button--secondary">
              Create a Free Account
            </Button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default GlobalNav

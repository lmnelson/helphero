import React from 'react'
import Link from 'gatsby-link'
import Button from './Button'

import logo01 from '../images/logo_01.svg'
import logo02 from '../images/logo_02.svg'
import logo03 from '../images/logo_03.svg'
import logo04 from '../images/logo_04.svg'

const GlobalNav = () => (
  <nav className="globalNav">
    <Link className="globalNav__brand" to="/">
      <img src={logo04} width="85px" />
    </Link>

    <ul>
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
        <Button classNames="button--secondary">Create a Free Account</Button>
      </li>
    </ul>
  </nav>
)

export default GlobalNav

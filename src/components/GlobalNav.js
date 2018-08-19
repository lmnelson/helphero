import React from 'react'
import Link from 'gatsby-link'
import Button from './Button'

const GlobalNav = () => (
  <nav className="globalNav">
    <div className="container">
      <div className="row middle-xs">
        <div className="col-md-2">
          <Link className="globalNav__brand" to="/">
            HelpHero
          </Link>
        </div>
        <div className="col-md-10 end-xs">
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
              <Button classNames="button--secondary">Make a Donation</Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)

export default GlobalNav

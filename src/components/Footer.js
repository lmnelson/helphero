import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <h5 className="footer__header">Address</h5>
          <address>
            <span>3321, Market St.</span>
            <span>San Francisco, CA, USA</span>
            <span>133145</span>
          </address>
          <h5 className="footer__header">Telephone</h5>
          <h5 className="footer__header">Social Media</h5>
        </div>
        <div className="col-sm-3">
          <ul className="footerList">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Hero Videos</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Our Team</Link>
            </li>
            <li>
              <Link to="#">Become a HelpHero</Link>
            </li>
            <li>
              <Link to="#">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-3 col-sm-offset-3">
          <button className="button button--secondary">
            Create a Free Account
          </button>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

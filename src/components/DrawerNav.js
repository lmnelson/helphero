import React, { Component } from 'react'
import Link from 'gatsby-link'

import img_closeDrawer from '../images/icons8-delete_sign.svg'

class DrawerNav extends Component {
  render() {
    const drawerClass = this.props.isVisible ? 'drawerNav--isVisible' : ''
    return (
      <div className={`drawerNav ${drawerClass}`}>
        <div className="drawer__header">
          <button
            className="iconButton button--primary"
            onClick={this.props.toggleDrawer}
          >
            <img src={img_closeDrawer} />
          </button>
        </div>
        <ul>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Hero Videos</Link>
          </li>
          <li>
            <Link to="#">Become a Hero</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default DrawerNav

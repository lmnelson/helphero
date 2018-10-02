import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import GlobalNav from '../components/GlobalNav'
import DrawerNav from '../components/DrawerNav'
import '../css/index.scss'
import 'flexboxgrid/dist/flexboxgrid.min.css'

class Layout extends Component {
  state = {
    navOpen: false,
  }
  handleDrawer = event => {
    event.preventDefault()
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }
  render() {
    return (
      <div className="wrapper">
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
          link={[
            {
              href:
                'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,600|IBM+Plex+Serif:300,400,400i,600',
            },
            { rel: 'stylesheet' },
          ]}
        />
        <DrawerNav
          isVisible={this.state.navOpen}
          toggleDrawer={this.handleDrawer}
        />
        <GlobalNav
          siteTitle={this.props.data.site.siteMetadata.title}
          toggleDrawer={this.handleDrawer}
        />
        <div>{this.props.children()}</div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

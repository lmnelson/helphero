import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import GlobalNav from '../components/GlobalNav'
import '../css/index.scss'
import 'flexboxgrid/dist/flexboxgrid.min.css'

const Layout = ({ children, data }) => (
  <div className="wrapper">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          href:
            'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,600|IBM+Plex+Serif:300,400,400i,600',
        },
        { rel: 'stylesheet' },
      ]}
    />
    <GlobalNav siteTitle={data.site.siteMetadata.title} />
    <div>{children()}</div>
  </div>
)

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

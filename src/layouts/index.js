import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import GlobalNav from '../components/GlobalNav'
import './index.scss'
import 'flexboxgrid/dist/flexboxgrid.min.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          href:
            'https://fonts.googleapis.com/css?family=IBM+Plex+Sans|IBM+Plex+Serif:400,400i,600|Lusitana',
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

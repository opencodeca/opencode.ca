import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';

import 'simple-css-reset/reset.css';
import './layout.css';

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={_ => <>{children}</>}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

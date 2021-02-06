import React from 'react';
import {graphql} from 'gatsby';

import Conclusion from '../components/Conclusion';
import Introduction from '../components/Introduction';
import Layout from '../components/Layout';
import Editions from '../components/Editions';

export default ({data}) => (
  <Layout {...data.site.siteMetadata}>
    <Introduction />
    <Editions editions={data.site.siteMetadata.editions} />
    <Conclusion />
  </Layout>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        editions {
          id
          dateTime
          location
          tipsAndTricks
          title

          talks {
            title

            speaker {
              avatar
              name
              screenName
            }
          }
        }
      }
    }
  }
`;

import React from 'react';
import {graphql} from 'gatsby';

import Conclusion from '../components/Conclusion';
import Introduction from '../components/Introduction';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Editions from '../components/Editions';

export default ({
  data: {
    site: {
      siteMetadata: {title, editions}
    }
  }
}) => (
  <Layout>
    <Head lang="fr" title={title} />
    <Introduction />
    <Editions editions={editions} />
    <Conclusion />
  </Layout>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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

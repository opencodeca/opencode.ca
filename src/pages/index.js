import React from 'react';
import {graphql} from 'gatsby';

import Conclusion from '../components/Conclusion';
import Introduction from '../components/Introduction';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Editions from '../components/Editions';

export default ({
  data: {
    speakerImages,
    site: {
      siteMetadata: {title, editions}
    }
  }
}) => (
  <Layout>
    <Head lang="fr" title={title} />
    <Introduction />
    <Editions editions={editions} speakerImages={speakerImages} />
    <Conclusion />
  </Layout>
);

export const pageQuery = graphql`
  query {
    speakerImages: allFile(filter: {relativePath: {glob: "speakers/*"}}) {
      edges {
        node {
          base
          childImageSharp {
            fixed(width: 96, height: 96, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

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

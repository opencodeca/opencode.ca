import React from 'react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';

import Favicon from '../images/favicon.png';
import OpenGraphImage from '../images/social.png';

import 'simple-css-reset/reset.css';
import '../styles/global.css';

const Wrapper = styled.div`
  padding: 60px 30px;
  margin: 0 auto;
  width: 100%;
  max-width: 550px;
`;

const Layout = ({children, title, description, siteUrl}) => (
  <>
    <Helmet htmlAttributes={{lang: 'fr'}}>
      <title>{title}</title>
      <link rel="shortcut icon" href={Favicon} type="image/png" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />

      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={siteUrl + OpenGraphImage} />
      <meta property="og:image:width" content="2000" />
      <meta property="og:image:height" content="1024" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@mirego" />
      <meta name="twitter:creator" content="@mirego" />

      <link
        rel="stylesheet"
        type="text/css"
        href="https://rsms.me/inter/inter.css"
      />
    </Helmet>

    <Wrapper>{children}</Wrapper>
  </>
);

export default Layout;

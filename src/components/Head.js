import React from 'react';
import Helmet from 'react-helmet';

import favicon from '../images/favicon.png';

const Head = ({lang, title}) => {
  return (
    <Helmet
      htmlAttributes={{lang}}
      title={title}
      link={[
        {rel: 'icon', type: 'image/png', href: favicon},
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://rsms.me/inter/inter.css'
        }
      ]}
    />
  );
};

export default Head;

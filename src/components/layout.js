import React from 'react';
import styled from '@emotion/styled';

import 'simple-css-reset/reset.css';
import '../styles/global.css';

const Wrapper = styled.div`
  padding: 60px 30px;
  margin: 0 auto;
  width: 100%;
  max-width: 550px;
`;

const Layout = ({children}) => <Wrapper>{children}</Wrapper>;

export default Layout;

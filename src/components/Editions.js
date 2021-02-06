import React from 'react';
import styled from '@emotion/styled';

import Edition from './Edition';

const List = styled.ul`
  padding: 90px 0 0;
`;

const Editions = ({editions}) => (
  <List>
    {editions.map(edition => (
      <Edition key={edition.id} {...edition} />
    ))}
  </List>
);

export default Editions;

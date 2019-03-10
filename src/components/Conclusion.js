import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.section`
  font-size: 24px;
  text-align: center;
}`;

const Link = styled.a`
  text-decoration: none;
`;

export default () => (
  <Wrapper>
    <Link href="mailto:equipe@opencode.ca">
      <span role="img" aria-label="Bye!">
        👋
      </span>
    </Link>
  </Wrapper>
);

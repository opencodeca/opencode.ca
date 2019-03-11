import React from 'react';
import styled from '@emotion/styled';

import Logo from '../images/opencode.png';

const LogoWrapper = styled.a`
  display: flex;
  justify-content: center;
  margin: 0 0 60px;
`;

const LogoImage = styled.img`
  display: block;
`;

const Paragraph = styled.p`
  margin: 0 0 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Team = styled.p`
  margin-top: 20px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);

  strong {
    display: block;
    font-weight: normal;
  }

  span {
    opacity: 0.5;
    font-size: 11px;
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.4);
  }

  a:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export default () => (
  <>
    <LogoWrapper href="/" className="logo-wrapper">
      <LogoImage src={Logo} width="166" height="102" alt="Logo de l’OpenCode" />
    </LogoWrapper>

    <Paragraph>
      L’OpenCode est une série de rencontres mensuelles tenues entre 2011 et
      2016 dans la ville de Québec où des développeurs se rencontraient autour
      de leur passion commune : le code.
    </Paragraph>

    <Paragraph>
      Au total, 30 éditions officielles (en plus d’une édition <em>bêta</em>)
      ont eu lieu.
    </Paragraph>

    <Paragraph>
      L’OpenCode n’existe plus. Mais pour la postérité, le contenu de ces
      éditions est encore disponible sur ce site Web.
    </Paragraph>

    <Paragraph>
      Merci!{' '}
      <span role="img" aria-label="Signe de paix">
        ✌️
      </span>
    </Paragraph>

    <Team>
      <strong>L’équipe de l’OpenCode</strong>
      <span>
        (<a href="https://twitter.com/JimmyBourassa">@JimmyBourassa</a>,{' '}
        <a href="https://twitter.com/frederickdubois">@frederickdubois</a>,{' '}
        <a href="https://twitter.com/garno">@garno</a> &amp;{' '}
        <a href="https://twitter.com/remi">@remi</a>)
      </span>
    </Team>
  </>
);

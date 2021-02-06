import React from 'react';
import styled from '@emotion/styled';
import Intl from 'intl';

import {Talk, TipsAndTricksTalk} from './Talk';

const formatDateTime = dateTime => {
  return new (
    (typeof window !== 'undefined' && window.Intl) ||
    Intl
  ).DateTimeFormat('fr', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
    .formatToParts(new Date(dateTime))
    .map(({type, value}) => {
      switch (type) {
        case 'weekday':
          return `${value}, le`;
        default:
          return value;
      }
    })
    .join(' ')
    .replace(/^1(\s)/, '1<sup>er</sup>$1');
};

const formatSlug = string => {
  const specialCharacters = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;';
  const normalizedCharacters =
    'aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------';
  const regex = new RegExp(specialCharacters.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(regex, character =>
      normalizedCharacters.charAt(specialCharacters.indexOf(character))
    )
    .replace(/&/g, '-and-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const Item = styled.li`
  margin: 0 0 30px;
  padding: 0 0 30px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  text-align: center;

  span {
    background: #222;
  }

  strong {
    display: inline-block;
    padding: 0 10px;
    background: #222;
  }

  em {
    display: block;
    font-size: 16px;
    font-weight: 300;
    font-style: normal;
    color: rgba(255, 255, 255, 0.6);
  }

  em:before {
    content: '(';
  }

  em:after {
    content: ')';
  }

  @media (max-width: 600px) {
    text-align: left;

    strong {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

const Content = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin: -38px 0 0;
  padding: 64px 0 0;
  @media (max-width: 600px) {
    border-top: 0;
  }
`;

export default ({title, dateTime, location, talks, tipsAndTricks}) => (
  <Item id={formatSlug(title)}>
    <Title className="edition-title">
      <span>
        <strong>{title}</strong>
        <em>
          <time
            dateTime={dateTime}
            dangerouslySetInnerHTML={{__html: formatDateTime(dateTime)}}
          />{' '}
          @ {location}
        </em>
      </span>
    </Title>

    <Content>
      {talks.map(talk => (
        <Talk key={talk.title} {...talk} />
      ))}

      {tipsAndTricks && <TipsAndTricksTalk key="tips-and-tricks" />}
    </Content>
  </Item>
);

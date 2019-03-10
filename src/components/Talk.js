import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const findSpeakerImage = (images, avatar) => {
  const image =
    images.edges.find(({node: {base}}) => base === avatar) ||
    images.edges.find(({node: {base}}) => base === '__default__.png');

  return image.node;
};

const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 0 0 15px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
`;

const Name = styled.strong`
  display: block;
`;

const Link = styled.a`
  font-weight: 500;
  text-decoration: none;
  color: #fff;
`;

const Title = styled.span`
  display: block;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.4;
`;

const Avatar = styled(Img)`
  border-radius: 1px;
  max-width: 48px;
  min-width: 48px;
  margin: 0 15px 0 0;
  filter: grayscale(100%);
`;

export const Talk = ({title, speaker, speakerImages}) => (
  <Item>
    <Avatar
      fixed={
        findSpeakerImage(speakerImages, speaker.avatar).childImageSharp.fixed
      }
      style={{width: 48, height: 48}}
      imgStyle={{width: 48, height: 48}}
    />

    <div>
      <Name>
        <Link href={`https://twitter.com/${speaker.screenName}`}>
          {speaker.name}
        </Link>
      </Name>

      <Title dangerouslySetInnerHTML={{__html: title}} />
    </div>
  </Item>
);

export const TipsAndTricksTalk = ({speakerImages}) => (
  <Item>
    <Avatar
      fixed={findSpeakerImage(speakerImages, null).childImageSharp.fixed}
      style={{width: 48, height: 48}}
      imgStyle={{width: 48, height: 48}}
    />

    <div>
      <Name>Tout le monde</Name>
      <Title>Trucs et astuces à partager</Title>
    </div>
  </Item>
);

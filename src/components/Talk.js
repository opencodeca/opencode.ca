import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

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

const AvatarImage = styled(Img)`
  border-radius: 1px;
  max-width: 48px;
  min-width: 48px;
  margin: 0 15px 0 0;
  filter: grayscale(100%);
`;

const AvatarPlaceholder = styled.div`
  border-radius: 1px;
  max-width: 48px;
  min-width: 48px;
  height: 48px;
  margin: 0 15px 0 0;
  opacity: 0.5;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background: radial-gradient(black 15%, transparent 16%) 0 0,
    radial-gradient(black 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;
  background-color: #282828;
  background-size: 16px 16px;
`;

const Avatar = ({placeholder, speakerImages, speaker}) => {
  if (placeholder) return <AvatarPlaceholder />;

  const image = speakerImages.edges.find(
    ({node: {base}}) => base === speaker.avatar
  );

  if (!image) return <AvatarPlaceholder />;

  return (
    <AvatarImage
      fixed={image.node.childImageSharp.fixed}
      style={{width: 48, height: 48}}
    />
  );
};

export const Talk = ({title, speaker, speakerImages}) => (
  <Item>
    <Avatar speakerImages={speakerImages} speaker={speaker} />

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
    <Avatar placeholder={true} />

    <div>
      <Name>Tout le monde</Name>
      <Title>Trucs et astuces à partager</Title>
    </div>
  </Item>
);

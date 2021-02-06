import React from 'react';
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

const NonLink = styled.span`
  font-weight: 500;
  color: #fff;
`;

const Title = styled.span`
  display: block;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.4;
`;

const AvatarImage = styled.img`
  border-radius: 3px;
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
  background: rgba(0, 0, 0, 0.25);
`;

const Avatar = ({placeholder, speaker}) => {
  if (placeholder) return <AvatarPlaceholder />;

  if (!speaker.avatar) return <AvatarPlaceholder />;

  return (
    <AvatarImage
      src={require(`../images/speakers/${speaker.avatar}`)}
      style={{width: 48, height: 48}}
    />
  );
};

const Speaker = ({screenName, name}) =>
  screenName ? (
    <Link href={`https://twitter.com/${screenName}`}>{name}</Link>
  ) : (
    <NonLink>{name}</NonLink>
  );

export const Talk = ({title, speaker}) => (
  <Item>
    <Avatar speaker={speaker} />

    <div>
      <Name>
        <Speaker {...speaker} />
      </Name>

      <Title dangerouslySetInnerHTML={{__html: title}} />
    </div>
  </Item>
);

export const TipsAndTricksTalk = () => (
  <Item>
    <Avatar placeholder={true} />

    <div>
      <Name>Tout le monde</Name>
      <Title>Trucs et astuces à partager</Title>
    </div>
  </Item>
);

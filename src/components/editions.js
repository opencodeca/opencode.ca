import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const formatDateTime = dateTime =>
  new Intl.DateTimeFormat('fr-CA').format(new Date(dateTime)).toString();

const Talk = ({title, speaker, images}) => {
  const image =
    images.edges.find(({node: {base: base}}) => base === speaker.avatar) ||
    images.edges.find(({node: {base: base}}) => base === '__default__.png');

  return (
    <li className="edition-talk">
      <Img
        className="edition-talk-avatar"
        fixed={image.node.childImageSharp.fixed}
        style={{width: 48, height: 48}}
        imgStyle={{width: 48, height: 48}}
      />

      <div className="edition-talk-content">
        <strong>
          <a href={`https://twitter.com/${speaker.screenName}`}>
            {speaker.name}
          </a>
        </strong>

        <span dangerouslySetInnerHTML={{__html: title}} />
      </div>
    </li>
  );
};

const TipsAndTricksTalk = ({images}) => (
  <li className="edition-talk">
    <Img
      className="edition-talk-avatar"
      fixed={
        images.edges.find(({node: {base: base}}) => base === '__default__.png')
          .node.childImageSharp.fixed
      }
      style={{width: 48, height: 48}}
      imgStyle={{width: 48, height: 48}}
    />

    <div className="edition-talk-content">
      <strong>Tout le monde </strong>
      <span>Trucs et astuces à partager</span>
    </div>
  </li>
);

const Edition = ({title, dateTime, location, talks, tipsAndTricks, images}) => (
  <li className="edition">
    <h2 className="edition-title">
      <span>
        <strong>{title}</strong>
        <em>
          <time dateTime={dateTime}>{formatDateTime(dateTime)}</time> @{' '}
          {location}
        </em>
      </span>
    </h2>

    <ul className="edition-content">
      {talks.map(talk => (
        <Talk key={talk.title} {...talk} images={images} />
      ))}

      {tipsAndTricks && (
        <TipsAndTricksTalk key="tips-and-tricks" images={images} />
      )}
    </ul>
  </li>
);

const Editions = () => {
  const {
    images,
    site: {
      siteMetadata: {editions}
    }
  } = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: {relativePath: {glob: "speakers/*"}}) {
          totalCount
          edges {
            node {
              base
              childImageSharp {
                fixed(width: 96, height: 96, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        site {
          siteMetadata {
            editions {
              id
              dateTime
              location
              tipsAndTricks
              title

              talks {
                title

                speaker {
                  avatar
                  name
                  screenName
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <ul className="editions">
      {editions.map(edition => (
        <Edition key={edition.id} {...edition} images={images} />
      ))}
    </ul>
  );
};

export default Editions;

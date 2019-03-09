import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../images/opencode.png';
import Editions from '../components/editions';

export default () => (
  <Layout>
    <SEO />
    <main>
      <section>
        <a href="/" className="logo-wrapper">
          <img src={Logo} width="166" alt="Logo de l’OpenCode" />
        </a>

        <p>
          L’OpenCode est une série de rencontres mensuelles tenues entre 2011 et
          2016 dans la ville de Québec où des développeurs se rencontraient
          autour de leur passion commune : le code.
        </p>

        <p>
          Au total, 30 éditions officielles (en plus d’une édition <em>bêta</em>
          ) ont eu lieu.
        </p>

        <p>
          L’OpenCode n’existe plus. Mais pour la postérité, le contenu de ces
          éditions est encore disponible sur ce site Web.
        </p>

        <p>
          Merci!{' '}
          <span role="img" aria-label="Signe de paix">
            ✌️
          </span>
        </p>

        <p className="team">
          — L’équipe de l’OpenCode (
          <a href="https://twitter.com/JimmyBourrassa">@JimmyBourrassa</a>,{' '}
          <a href="https://twitter.com/frederickdubois">@frederickdubois</a>,{' '}
          <a href="https://twitter.com/garno">@garno</a> et{' '}
          <a href="https://twitter.com/remi">@remi</a>)
        </p>
      </section>

      <Editions />

      <section className="conclusion">
        <a href="mailto:equipe@opencode.ca" role="img" aria-label="Bye!">
          👋
        </a>
      </section>
    </main>
  </Layout>
);

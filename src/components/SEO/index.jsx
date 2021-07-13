import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

function Index({ description, meta, title }) {
  const formattedTitle = `${title} | TonyBrand`;

  return (
    <Head>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={formattedTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="TonyBrand Marketing Imobiliário" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      {meta.map(({ name, content }) => (
        <meta name={name} key={name} content={content} />
      ))}
    </Head>
  );
}

Index.defaultProps = {
  meta: ['residencial', 'condominio', 'village real', 'village', 'alto padrão', 'tranquilidade', 'natureza'],
  description: `Residencial Village Real, um condomínio de alto padrão inspirado na tranquilidade da natureza e do verde, o GRUPO ALFA IMÓVEIS CONSTRUÇÕES projetou para Manhuaçu e Simonésia um lugar para integrar a atmosfera de sua casa.`,
};

Index.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Index;

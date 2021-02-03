import React from 'react';
import Head from 'next/head';
import carousel from '../../assets/carrossel.png';
import icon from '../../assets/icon.png';

export default function Home() {
  return (
    <Head>
      <title>adoCão</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:locale" content="pt_BR" />

      <meta property="og:title" content="adoCão" />
      <meta property="og:site_name" content="adoCao" />

      <meta property="og:description" content="Site de adoção de cachorros." />
      <meta property="og:image" content={carousel} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:type" content="website" />

      <link rel="icon" type="image/png" href={icon} />
    </Head>
  );
}
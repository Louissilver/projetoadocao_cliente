import React from 'react';
import Head from 'next/head';
import carousel from '../../assets/carrossel.png';
import icon from '../../assets/icon.png';

export default function Home({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:locale" content="pt_BR" />

            <meta property="og:title" content="adoCão" />
            <meta property="og:site_name" content="adoCao" />

            <meta property="og:description" content="Site de adoção de cachorros." />
            <meta property="og:image" content={carousel} />
            <meta property="og:type" content="website" />

            <link rel="icon" type="image/jpg" href={icon} />
        </Head>
    );
}
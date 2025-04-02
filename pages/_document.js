import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="E-commerce de produtos para bebês" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* SEO Meta Tags */}
        <meta property="og:title" content="E-commerce Baby - Produtos para o seu bebê" />
        <meta
          property="og:description"
          content="Os melhores produtos para bebês com entrega rápida para todo o Brasil"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecommerce-baby.vercel.app" />
        <meta property="og:image" content="https://ecommerce-baby.vercel.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer';
import Nav from '../components/nav';
import Script from "next/script";

export interface ILayout{
    title:string;
    description:string;
    children: any;
}

export default function Document() {
  return (
    <Html lang='en-us'>
      <Head>
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-MVLTHPR40S"></Script >
        <Script
         id="google-analytics"
         strategy="afterInteractive"
         dangerouslySetInnerHTML={{
           __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-MVLTHPR40S', {
              page_path: window.location.pathname,
             });
            `,
         }} />
      <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="description" />
        <meta name="keywords" content="tailwind,tailwindcss,tailwind css,css,starter template,free template,store template, shop layout, minimal, monochrome, minimalistic, theme, nordic" />
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <Nav />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}

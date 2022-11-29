import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer';
import Nav from '../components/nav';

export interface ILayout{
    title:string;
    description:string;
    children: any;
}

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>NK Shop</title>
        <meta name="description" content="description" />
        <meta name="keywords" content="tailwind,tailwindcss,tailwind css,css,starter template,free template,store template, shop layout, minimal, monochrome, minimalistic, theme, nordic" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
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
import Head from "next/head";
import About from "../components/about";
import Footer from "../components/footer";
import Hero from "../components/hero";
import FeaturedProducts from "../components/featured-products";
import { getHomePageKontent2 } from "../lib/kontent/home";
import { HomePage } from "../lib/kontent/models";

export default function Home({...p}: HomePage) {
  console.log(p);
  return (
    <>
    <Head>
      <title>Home | NK Shops</title>
    </Head>
      <Hero {...p.elements.hero.linkedItems[0]} />
      <FeaturedProducts {...p.elements.feature_products} />
      <About />
    </>
  );
}

export async function getStaticProps() {
  console.log("here");
  const homePage = await getHomePageKontent2();
  console.log(homePage);
  return {
    props: {
      ...homePage,
    },
  };
}

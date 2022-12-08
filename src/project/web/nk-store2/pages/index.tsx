import Head from "next/head";
import About from "../components/about";
import Footer from "../components/footer";
import Hero from "../components/hero";
import FeaturedProducts from "../components/featured-products";
import { getHomePageKontent2 } from "../lib/kontent/home";
import { HomePage } from "../lib/kontent/models";

export default function Home({...p}: HomePage) {
  return (
    <>
    <Head>
      <title>Home | NK Shops</title>
    </Head>
      <Hero {...p.homePage.item.elements.hero.linkedItems[0]} />
      <FeaturedProducts {...p.homePage.item.elements.feature_products} />
      <About />
    </>
  );
}

export async function getStaticProps() {
  console.log("here");
  const homePage = await getHomePageKontent2();

  return {
    props: {
      homePage,
    },
  };
}

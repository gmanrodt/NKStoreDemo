import Head from "next/head";
import About from "../components/about";
import Footer from "../components/footer";
import Hero from "../components/hero";
import FeaturedProducts from "../components/featured-products";
import { getHomePageKontent } from "../lib/kontent/home";

export default function Home({homePage}: any) {
  console.log(homePage);

  return (
    <>
    <Head>
      <title>Home | NK Shops</title>
    </Head>
      <Hero headline={homePage?.heroBanner?.headline} background_image={homePage?.heroBanner?.background_image} cta_text={homePage?.heroBanner?.cta_text} cta_route={homePage?.heroBanner?.cta_route}/>
      <FeaturedProducts products={homePage.featuredProducts.products} heading={homePage.featuredProducts.heading}  />
      <About />
    </>
  );
}

export async function getStaticProps() {
  console.log("here");
  const homePage = await getHomePageKontent();
  return {
    props: {
      homePage,
    },
  };
}

import About from "../components/about";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Products from "../components/products";
import { getHomePageKontent } from "../lib/kontent/home";

export default function Home({homePage}: any) {
  console.log(homePage);

  return (
    <>
    {/* <Layout
      title="Home"
      description="NK Shop is a site for demonstrating the capabilities of NextJS, TailwindCSS, and Kontent.ai"
    > */}
      <Hero headline={homePage?.heroBanner?.headline} background_image={homePage?.heroBanner?.background_image} cta_text={homePage?.heroBanner?.cta_text}/>
      <Products products={homePage.featuredProducts.products} heading={homePage.featuredProducts.heading}  />
      <About />
      <Footer />
    {/* </Layout> */}
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

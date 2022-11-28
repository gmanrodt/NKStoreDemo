import About from "../components/about";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Products from "../components/products";

export default function Home() {
  return (
    <Layout
      title="Home"
      description="NK Shop is a site for demonstrating the capabilities of NextJS, TailwindCSS, and Kontent.ai"
    >
      <Hero />
      <Products />
      <About />
      <Footer />
    </Layout>
  );
}

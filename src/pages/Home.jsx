import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero";
import SearchBar from "../sections/SearchBar";
import Categories from "../sections/Categories";
import PromoBanner from "../sections/PromoBanner";
import Specials from "../sections/Specials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Categories />
      <Specials />
      <PromoBanner />
      <Footer />
    </>
  );
};

export default Home;

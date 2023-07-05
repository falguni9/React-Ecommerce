import FeatureProduct from "../components/FeatureProduct";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const data = {
    name: "Ray ",
    Electronics:'Electronics',
    Mobiles:'Mobiles',
    Digitals:'Digitals',
    Hardwares:'Hardwares'
  };

  return (
    <>
    <Header />
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
      <Footer />
    </>
  );
};

export default Home

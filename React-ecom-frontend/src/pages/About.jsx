import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { useProductContext } from "../context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "You can Buy ",
    Electronics:'Electronics',
    Mobiles:'Mobiles',
    Digitals:'Digitals',
    Hardwares:'Hardwares'
  };

  return (
    <>
      <Header />
      {myName}
      <HeroSection myData={data} />
      <Footer/>
    </>
  );
};

export default About;

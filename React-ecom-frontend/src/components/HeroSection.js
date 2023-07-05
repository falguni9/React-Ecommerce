import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import Typewriter from 'typewriter-effect';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HeroSection = ({ myData }) => {
  const { name,Electronics, Mobiles,Digitals,Hardwares} = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1  > {name}<span style={{color:'green',display:'inline-block'}}> <Typewriter
                                options={{
                                  strings: [Electronics, Mobiles,Digitals,Hardwares],
                                  autoStart: true,
                                  loop: true,
                                }}
                              />  </span>
            </h1>
            <p>
            Hurry! It is a great place to get your next phone, laptop, or TV. We offer many different items, and the experts are always available if you need help choosing anything. The return policy can also be beneficial in case something isn’t quite right with it either.
            </p>
            <NavLink to="/product"  >
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
          <NavLink to="/product"  >
          <Carousel autoPlay={true} interval={1500} infiniteLoop={true} >
                <div className="dd-none">
                 <figure>
                      <img
                      src="https://res.cloudinary.com/dygfqcdgo/image/upload/v1688477391/offer_moblie_alll_50_rnwjz9.jpg"
                      alt="hero-section-photo"
                      className="img-style"
                    />
                   
                 </figure>
                </div>
                <div className="dd-none">
                 <figure>
                        <img
                        src="https://res.cloudinary.com/dygfqcdgo/image/upload/v1688477391/offer_moblie_50_yyeqld.webp"
                        alt="hero-section-photo"
                        className="img-style"
                      />
                    
                 </figure>
                </div>
                <div className="dd-none">
                 <figure>
                      <img
                      src="https://res.cloudinary.com/dygfqcdgo/image/upload/v1688477391/offer_50_thx7n8.jpg"
                      alt="hero-section-photo"
                      className="img-style"
                    />
                   
                 </figure>
                </div>
                <div className="dd-none">
                 <figure>
                      <img
                      src="https://res.cloudinary.com/dygfqcdgo/image/upload/v1687868650/react%20ecoom%20logo/shop_image_qqjop5.jpg"
                      alt="hero-section-photo"
                      className="img-style"
                    />
                   
                 </figure>
                </div>
            </Carousel>
            </NavLink>
            {/* <figure>
              <img
                src="images/shop image.jpeg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem;
  margin-top:10rem;
  background-image: url("images/bghome.gif");
    background-color: #cccccc;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    // background-origin: content-box;
   
  
  


  .hero-section-data {
    p {
      margin: 2rem 0;
      color:white;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      background-image: url("images/bggif.gif");
    background-color: #cccccc;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    // background: -webkit-linear-gradient(#f7ef07, #eeedf2,#23f707);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    border-radius:2rem;
    box-shadow: 0 0 1rem 0 rgba(81, 81, 81, 0.57);
  }
  .img-style {
    width: 50rem;
    height: 30rem;
    border-radius:2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    .dd-none{
      display:none;
    } 
  }
`;

export default HeroSection;

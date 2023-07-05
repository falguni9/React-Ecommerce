import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useProductContext } from "../context/productcontex";
import styled from "styled-components";

const Product = (curElem) => {
  // console.log("product conpo = = = =",curElem)
  const { isLoading } = useProductContext();
  console.log(isLoading)
  if (isLoading) {
    return <div className="card">
            <figure>
              <img src="images/newgif.gif" alt="gif" />
          {/* // figcaption provide datail of the product img(caption) */}
            {/* <figcaption className="caption">{category}</figcaption> */}
          </figure>
        </div>;
  }

  const { _id, name, image, price, category } = curElem;
  return (
    <Wrapper>
    <NavLink to={`/singleproduct/${_id}`}>
      <div className="card">
      <Carousel autoPlay={true} interval={1500} infiniteLoop={true} >
        
     
        
        <figure>
          <img src={image[0].url} alt={name} />
          {/* // figcaption provide datail of the product img(caption) */}
          <figcaption className="caption">{category}</figcaption>
        </figure>
        
        
        <figure>
          <img src={image[1].url} alt={name} />
          {/* // figcaption provide datail of the product img(caption) */}
          <figcaption className="caption">{category}</figcaption>
        </figure>
        
        
        <figure>
          <img src={image[2].url} alt={name} />
          {/* // figcaption provide datail of the product img(caption) */}
          <figcaption className="caption">{category}</figcaption>
        </figure>
        
        <div>
        <figure>
          <img src={image[3].url} alt={name} />
          {/* // figcaption provide datail of the product img(caption) */}
          <figcaption className="caption">{category}</figcaption>
        </figure>
        </div>
    </Carousel>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
        
      </div>
    </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
box-shadow: 0 0 1rem 0 rgba(81, 81, 81, 0.57);
border-radius:1rem;


`

export default Product;

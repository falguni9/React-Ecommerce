import styled from "styled-components";
import FilterSection from "../components/FilterSection";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Products = () => {

  return (
    <Wrapper>
      <Header />
      <div className="container grid grid-filter-column">
        <div className="dp-none">
          <FilterSection  />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`

.container{
  margin:10rem auto;
  padding: 1rem;
}
  .grid-filter-column {
    grid-template-columns: 1fr 4fr;
    gap:1rem;
  }
  .product-view--sort{
    width:100wv;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-filter-column {
      grid-template-columns:1fr;
    }
    .dp-none{
      display:none;
    }
  }
`;

export default Products;

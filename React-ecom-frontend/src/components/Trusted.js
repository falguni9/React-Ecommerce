import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://res.cloudinary.com/dygfqcdgo/image/upload/v1687868596/react%20ecoom%20logo/2560px-LG_logo__2015_.svg_aii0a3.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/dygfqcdgo/image/upload/v1687868570/react%20ecoom%20logo/Nokia-Logo.wine_qpl77y.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/dygfqcdgo/image/upload/v1687868569/react%20ecoom%20logo/samsung-4-logo-png-transparent_iinvqt.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/dygfqcdgo/image/upload/v1687868547/react%20ecoom%20logo/Bosch-logo.svg_keqteo.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/dygfqcdgo/image/upload/v1687868485/react%20ecoom%20logo/Apple_logo_black.svg_yjg0tn.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 5rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;

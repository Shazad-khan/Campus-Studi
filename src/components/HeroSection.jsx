import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";
import img from "../components/causal.png"
import { useAuth0, User } from "@auth0/auth0-react";

const HeroSection = () => {
  const { name, image } = useGlobalContext();
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Hy i'm</p>
          <h1 className="hero-heading">NEXT GEN.. <br/> TASK MANAGER</h1>
          <p className="hero-para">
            I'm the next generation task manager for stack Developer,DSA , learning different language ,campiles ,reasume buling and college suppert.
            assignment,notes,support chat....
          </p>
          <Button className="btn hireme-btn" onClick={() => loginWithRedirect()}>
            Get Start
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={img}alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    transform:scale(1.5);
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;

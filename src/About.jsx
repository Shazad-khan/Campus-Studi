 import React from 'react'
 import styled from 'styled-components'
 import { useAuth0, User } from "@auth0/auth0-react";
 import { Button } from './styles/Button'
 import about1 from "./components/home.png"
 import "./About.css"
 
 const About = () => {
  const { loginWithRedirect } = useAuth0();
   return (
     <hello>
           <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">i am the next generation and advance</p>
          <h1 className="hero-heading">frameworks,<br/>compilers</h1>
          <p className="hero-para">
          we have different type of compliers & frameworls
           C++,c.C#,java,python,
          </p>
          <Button className='btn hireme-btn'onClick={() => loginWithRedirect()}>
            Click
           </Button>
          </div>
          
           {/* img section */}
           <div className="section-hero-image">
          <picture>
            <img src={about1}alt="hero image" className="hero-img " />
          </picture>
        </div>
          </div>
     </hello>
   )
 }
 const hello = styled.section`
  padding: 9rem 0;
`;
 
 export default About
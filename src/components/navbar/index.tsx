import React from "react";
import styled from "styled-components";
import { Logo } from "../logo";
import { Button } from "../button";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";


const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 1);

  @media screen and (max-width: 480px) {
    height: 85px;
}
  `;

const BrandContainer = styled.div`
  margin-left: 1%;
`;


const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 4%;
`;


export function Navbar(props) {
  const scrollToAboutSection= () => {
    scroller.scrollTo("aboutSection", { smooth: true, duration: 1500 })
  }
  const scrollToFeaturesSection= () => {
    scroller.scrollTo("featuresSection", { smooth: true, duration: 1500 })
  }

  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>

      <AccessibilityContainer>
        <Link to="/mybots">
          <Button small> My Bots </Button>
        </Link>
        <Button small onClick={scrollToAboutSection}> Litepaper </Button>
        <Button small onClick={scrollToFeaturesSection}> Gitbook </Button>
        <Button small orange onClick={scrollToFeaturesSection}> Rarities </Button>
      </AccessibilityContainer>
    </NavbarContainer>
  );

}

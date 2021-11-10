import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import BackgroundImg from "../../assets/pictures/background.png";
import BackgroundImgMobile from "../../assets/pictures/background_mobile.png";
import { OurNavbar } from "../../components/navbar";
import { Element } from "react-scroll";
import PromoVid from "../../assets/videos/2021_0929_teaser_final.mov";

const TopContainer = styled.div`
  width: 100%;
  height: 1400px;
  background-image: url(${BackgroundImg});
  background-size: cover;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    background-image: url(${BackgroundImgMobile});
    height: 750px;

}
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const SloganText = styled.h1`
  font-family: Share Tech Mono;
  font-size: 64px;
  font-weight: 400;
  color: #FFFFFF;
  text-align: center;
  margin-block-start: 1em;
  margin-block-end: 0.2em;

  @media screen and (min-width: 1281px) and (max-width: 1680px) {
    font-size: 64px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    font-size: 64px;
  }

  @media screen and (max-width: 480px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) and (max-height: 660px) {
  font-size: 28px;

}

@media screen and (max-width: 480px) and (max-height: 600px) {
  font-size: 26px;
}

`;

const SubText = styled.h2`
  font-family: Share Tech Mono;
  font-size: 28px;
  font-weight: 400;
  color: #FFFFFF;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 16px;
}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  max-width: 760px;
`;


const Video = styled.video`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8em auto;

  @media screen and (max-width: 480px) {
    width: 100%;
}

@media screen and (max-width: 880px) {
  width: 100%;
}
`;

interface Props {
  small: boolean;
}

const SoldOutButton = styled.button`
  padding: ${(p: Props) => p.small ? "16px 20px " : "16px 22px"};
  border-radius: 5px;
  background-color: ${theme.primary};
  color: #FFFFFF;
  font-weight: normal;
  font-size: 18px;
  font-family: Share Tech Mono;
  outline: none;
  border: none;
  cursor: pointer;
`;


export function TopSection(props) {

  return(
  <Element name="topSection">
    <TopContainer>
      <BackgroundFilter>
      <OurNavbar />
      <TextContainer>
        <SloganText> BATTLE & EARN </SloganText>
        <SubText> Own a bot and fight your way to the top in Solana’s Robot Ruled Metaverse </SubText>
        <a href = "https://solanart.io/collections/antisocialrobots">
          <SoldOutButton small>
            Sold Out
          </SoldOutButton>
        </a>
      </TextContainer>

      <Video controls autoPlay>
        <source src={PromoVid} type="video/mp4" />
      </Video>

      </BackgroundFilter>
    </TopContainer>
  </Element>
  );
}

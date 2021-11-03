import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { ColoredLine } from "../../components/line";
import DiscordImg from "../../assets/illustrations/discord.png";
import TwitterImg from "../../assets/illustrations/twitter.png";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled(Element)`
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
`;

const FooterRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-right: 1%;
  margin-left: 1%;

  @media screen and (max-width: 480px) {
    display: inline-block;
    margin-bottom: 2em;
}
`;

const FooterSubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 33.33%;
  padding: 10px 50px;

  @media screen and (max-width: 1280px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0;
}

  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0;
}
`;

const Details = styled.p`
  color: #FFFFFF;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  font-family: Share Tech Mono;
  text-align: center;
  max-width: 90%;

  @media screen and (max-width: 480px) {

}
`;

const Marketplaces = styled.p`
  color: #FFFFFF;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  font-family: Share Tech Mono;
  text-align: center;
  margin-block-start: 0.3em;
  margin-block-end: 0.3em;
  @media screen and (max-width: 480px) {

}
`;

const SocialMediaImg = styled.img`
  width: 8em;
  height: 6em;

  @media screen and (max-width: 480px) {
  width: 6em;
  height: 5em;
  align-items: center;
}
`;

const ButtonWrap = styled.button`
  align-items: center;
  color: transparent;
  background-color: transparent;
  outline: none;
  border: none;
  transition: all 220ms ease-in-out;
  cursor: pointer;
  padding: 15px 15px;

  &:hover {
    border: none;
    transform:scale(1.3, 1.3);

  }

  @media screen and (min-width: 1024px) and (max-width: 1680px) {

}

  @media screen and (max-width: 480px) {
    align-items: center;

}

`;


export function FooterSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <FooterContainer>
    <ColoredLine />
    <FooterRow>
    <FooterSubContainer>
          <ButtonWrap>
            <a href = "https://discord.gg/Vk26nVgTMk">
            <SocialMediaImg src={DiscordImg} />
            </a>
          </ButtonWrap>
          <ButtonWrap>
            <a href="https://twitter.com/AntiSocialBots">
            <SocialMediaImg src={TwitterImg} />
            </a>
          </ButtonWrap>
    </FooterSubContainer>

    { !isMobile ? (
      <FooterSubContainer>
            <Details> ©2021, Anti Social Robot Club. All Rights Reserved </Details>
      </FooterSubContainer>
    ): (
      <FooterSubContainer>
      </FooterSubContainer>
    )}


    <FooterSubContainer>
          <a href = "https://solanart.io/collections/antisocialrobots">
          <ButtonWrap>
            <Marketplaces> Solanart </Marketplaces>
          </ButtonWrap>
          </a>

          <a href = "https://ftx.us/nfts/collection/Anti%20Social%20Robot%20Club/25/1">
          <ButtonWrap>
            <Marketplaces> FTX_US </Marketplaces>
          </ButtonWrap>
          </a>

          <a href = "https://digitaleyes.market/collections/Anti%20Social%20Robot%20Club">
          <ButtonWrap>
            <Marketplaces> Digital Eyes </Marketplaces>
          </ButtonWrap>
          </a>

          <a href = "https://www.magiceden.io/marketplace/anti_social_robot_club">
          <ButtonWrap>
            <Marketplaces> Magic Eden </Marketplaces>
          </ButtonWrap>
          </a>
      </FooterSubContainer>
      </FooterRow>
    </FooterContainer>

  );

}

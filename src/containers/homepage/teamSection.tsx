import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { TeamService } from "../../components/team";
import BotOne from "../../assets/illustrations/bot_3.png";
import BotTwo from "../../assets/illustrations/bot_2.png";
import BotThree from "../../assets/illustrations/bot_1.png";

const TeamSectionContainer = styled(Element)`
  width: 100%;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  background: rgba(22, 177, 243, 0.95);
`;

export const TeamTitle = styled.h1`
  font-size: 64px;
  font-weight: 400;
  color: #000000;
  font-family: Share Tech Mono;
  margin-left: 5%;


  @media screen and (max-width: 480px) {
  font-size: 28px;
}
`;

export const TeamContent = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  font-family: Share Tech Mono;
  margin-left: 5%;
  margin-right: 10%;


  @media screen and (max-width: 480px) {
  font-size: 14px;
  margin-left: 5%;
  margin-right: 9%;
}
`;

export const TeamRow = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 480px) {
    display: inline-block;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  @media screen and (max-width: 480px) {
  }
`;


export function TeamSection(props) {
  return (

    <TeamSectionContainer name="botSection">
    <TeamTitle> The Team </TeamTitle>
    <TeamContent> The core team consists of three IRL friends. We are all software developers with 5+ years of experience for our day jobs, and have separate passions for crypto and art. Our technical background allows us to learn and adapt quickly -- an important quality in a space that changes every day</TeamContent>
    <TeamContent> In the near future we are looking to add two new positions: a Digital Animator and a Community Manager</TeamContent>

    <TeamContainer>
      <TeamRow>
        <TeamService
          title="Chief"
          description="Marketing, Blockchain + Web Dev"
          imgUrl={BotOne}
        />
        <TeamService
          title="Meatball"
          description="Backend dev, 3D Modeling"
          imgUrl={BotTwo}
        />
        <TeamService
          title="Mr. Frank"
          description="Lead Artist + Designer"
          imgUrl={BotThree}
        />
      </TeamRow>
    </TeamContainer>
    </TeamSectionContainer>

  );

}

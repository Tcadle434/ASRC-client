import React from "react";
import styled from "styled-components/macro";



const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 480px) {

}

`;

const ServiceImg = styled.img`
  width: 20em;
  height: 25em;

  @media screen and (max-width: 480px) {
  width: 8em;
  height: 10em;
  }

  @media screen and (min-width: 480px) and (max-width: 1020px) {
  width: 12em;
  height: 15em;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
  }

`;

const Title = styled.h2`
  color: #FFFFFF;
  font-family: Share Tech Mono;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  margin-block-end: 0.3em;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
  }
`;

const Details = styled.p`
  color: #000000;
  font-family: Share Tech Mono;
  font-style: normal;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  max-width: 80%;

  @media screen and (max-width: 480px) {
    font-size: 16px;
}
`;


export function TeamService(props) {
const { imgUrl, title, description } = props;

  return (
    <ServiceContainer >
          <Title> {title} </Title>
          <ServiceImg src={imgUrl} />
          <DescriptionContainer>
          <Details> {description} </Details>
        </DescriptionContainer>
    </ServiceContainer>

  );

}

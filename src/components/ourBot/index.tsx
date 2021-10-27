import React from "react";
import styled from "styled-components/macro";

const BotContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  @media screen and (max-width: 480px) {
  }

`;


const BotImg = styled.img`
  width: 18em;
  height: 24em;

@media screen and (max-width: 480px) {
  width: 7em;
  height: 10.25em;
}

@media screen and (min-width: 480px) and (max-width: 860px) {
  width: 7em;
  height: 10.25em;
}

@media screen and (min-width: 860px) and (max-width: 1280px) {
  width: 12em;
  height: 16em;
}
`;

export function OurBot(props) {
const { imgUrl } = props;

  return (
        <BotContainer>
          <BotImg src={imgUrl} />
        </BotContainer>
  );

}

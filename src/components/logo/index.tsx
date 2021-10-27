import React from "react";
import styled, { css } from "styled-components";
import NftLogo from "../../assets/logo/ASRC_logo_2.png";

interface Props {
  inline: boolean;
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${(p: Props) => p.inline  ? "row" : "column"};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;
  align-items: center;

  ${(p: Props) => p.inline &&
  css`
  width: 75px;
  height: 75px;
  margin-right: 6px;
  `};

  @media screen and (max-width: 480px) {
    width: 60px;
    height: 60px;
}
`;

const LogoText = styled.div`
  margin-top: ${(p: Props) => p.inline ? 0 : "6px"};
  color: #FFFFFF;
  font-weight: normal;
  font-size: 20px;
  font-family: Share Tech Mono;

  @media screen and (max-width: 480px) {
  font-size: 12px;
  word-spacing: 100vw;
  margin: auto;
}
`;


const styles = {
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'},
    blue: {color: '#16B1F3'}
};

export function Logo(props) {
const { inline } = props;

  return(
    <LogoContainer inline={inline}>
      <LogoImg src={NftLogo} inline={inline}/>
      <LogoText inline={inline}> Anti Social <span style={styles.blue}>Robot</span> Club
      </LogoText>
    </LogoContainer>

  );

}

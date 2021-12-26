import React from "react";
import styled from "styled-components/macro";

const BotContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  background-color: #000000;
  background-image: radial-gradient(closest-corner, #16B1F3 0%, #000000 82%);
  border: 2px solid #FFFFFF;
  border-radius: 20px;
  width: 475px;


  @media screen and (max-width: 480px) {
  }

`;

const BotContainerThree = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  width: 475px;


  @media screen and (max-width: 480px) {
  }

`;

const BotImg = styled.img`
  width: 15em;
  height: 20em;
`;

const BotImgThree = styled.img`
  width: 20em;
  height: 20em;
`;

const BotName = styled.h2`
  font-size: 26px;
  font-weight: 1600;
  color: #FFFFFF;
  font-family: Share Tech Mono;
`;

const MetadataContainer = styled.div`
  padding: 4px;
  margin: 15px;
  display: flex;
  color: #FFFFFF!important;
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  font-size: 14px!important;
  font-family: Share Tech Mono!important;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 75px;
  min-width: 120px;
  background-color: #16B1F3;
`;

const MetadataRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  @media screen and (max-width: 480px) {
    min-height: 1800px;

  }
`;

const MetadataRowWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    min-height: 1800px;

  }
`;

const MetadataTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  font-family: Share Tech Mono;
  margin-block-start: 0.2em;
  margin-block-end: 0.2em;
`;

const MetadataValue = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: #FFFFFF;
  font-family: Share Tech Mono;
  margin-block-start: 0.6em;
  margin-block-end: 0.2em;
`;

export function BotNft(props) {
const { imgUrl, name, attributeArray} = props;

  return (
        <BotContainer>
          <BotImg src={imgUrl} />
          <BotName> {name} </BotName>
          <MetadataRowWrapper>
          <MetadataRow>
          {attributeArray.map(({trait_type, value}) => (
            <MetadataContainer> <MetadataTitle>{trait_type} </MetadataTitle> <MetadataValue>{value} </MetadataValue> </MetadataContainer>
            )
          )}
          </MetadataRow>
          </MetadataRowWrapper>
        </BotContainer>
  );

}

export function BotNftThree(props) {
  const { imgUrl } = props;
  
    return (
          <BotContainerThree>
            <BotImgThree src={imgUrl} />
          </BotContainerThree>
    );
  
  }

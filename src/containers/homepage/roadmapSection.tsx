import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { Element } from "react-scroll";
import { SectionTitle } from "../../components/sectionTitle";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaRobot, FaGem, FaShoppingBag, FaGift } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { GiTwoCoins } from "react-icons/gi";
import { GrThreeD } from "react-icons/gr";


const RoadmapContainer = styled(Element)`
  width: 100%;
  min-height: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.97);

`;

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    border-radius: 20px;
    background-color: ${theme.primary}!important;
    box-shadow: none!important;
  }

  @media screen and (max-width: 480px) {
    max-width: 92%;
  }
`;


const DetailsHeader = styled.h3`
  font-family: Share Tech Mono;
  font-weight: 600;
  font-size: 26px;

    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
`;

const Details = styled.p`
  font-family: Share Tech Mono;
  font-size: 20px!important;

    @media screen and (max-width: 480px) {
      font-size: 16px!important;
    }
`;


const RobotImg = styled(FaRobot)`
  color: #000000!important;
`;


const RareImg = styled(FaGem)`
  color: #000000!important;
`;


const GameImg = styled(IoLogoGameControllerB)`
  color: #000000!important;
`;


const MarketImg = styled(FaShoppingBag)`
  color: #000000!important;
`;

const ThreeDImg = styled(GrThreeD)`
  color: #000000!important;
`;

const GiftImg = styled(FaGift)`
  color: #000000!important;
`;

const CoinImg = styled(GiTwoCoins)`
  color: #000000!important;
`;

export function RoadmapSection(props) {
  return (
    <RoadmapContainer name="roadmapSection">
      <SectionTitle> Here's the Plan </SectionTitle>

      <VerticalTimeline>
        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<RobotImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title"><del>R-Day</del></DetailsHeader>
          <Details>
            <del>The day of the Robot Uprising. October 1st the original 4,444 2D bots are available to mint for 0.15 SOL </del>
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<MarketImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title"><del>Secondary Marketplace</del></DetailsHeader>
          <Details>
             <del>Bots listed on all major Solana Marketplaces, including Solanart, Digital Eyes, FTX_US, and Magic Eden</del>
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<RareImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title"><del>Rarities Released</del></DetailsHeader>
          <Details>
          <del>Rarity Chart will be released, as well as an official ranking system on HowRare.is</del>
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<GiftImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title"><del>USB Airdrop</del></DetailsHeader>
          <Details>
            <del>USB NFT Airdropped to all bot holders with DELISTED bots. Needed to initiate the 3D upgrade</del>
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<ThreeDImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">3D Upgrade</DetailsHeader>
          <Details>
            2D bots are available to upgrade on our site. Welcome the 3D metaverse ready robots of the ASRC
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<CoinImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">$ROBO Launch + Staking</DetailsHeader>
          <Details>
            Tokenomics finalized and launch of our in-game token through an Earn-By-Staking NFT model
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<GameImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">Battle Arena</DetailsHeader>
          <Details>
            Beta Launch of the Battle Arena, A simulated, tournament style competition for 3D robots to battle and earn $ROBO
          </Details>
        </StyledVerticalTimelineElement>

      </VerticalTimeline>

    </RoadmapContainer>

  );

}

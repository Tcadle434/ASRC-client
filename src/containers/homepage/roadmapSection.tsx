import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { Element } from "react-scroll";
import { SectionTitle } from "../../components/sectionTitle";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { GrMoney } from "react-icons/gr";
import { FaRobot, FaGem, FaTshirt, FaShoppingBag, FaGift } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { GiToyMallet, GiTwoCoins } from "react-icons/gi";
import { GrThreeD } from "react-icons/gr";

import BotOneImg from "../../assets/illustrations/bot_1.png";
import BotTwoImg from "../../assets/illustrations/bot_2.png";
import BotThreeImg from "../../assets/illustrations/bot_3.png";
import BotFourImg from "../../assets/illustrations/bot_4.png";

const RoadmapContainer = styled(Element)`
  width: 100%;
  min-height: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  padding: 10px; 0

`;

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    border-radius: 20px;
    background-color: ${theme.primary}!important;
    box-shadow: none!important;
  }

  .vertical-timeline-element-icon svg {

`;


const DetailsHeader = styled.h3`
  font-family: Share Tech Mono;
  font-weight: 600;
  font-size: 26px;

    @media screen and (max-width: 480px) {

    }
`;

const Details = styled.p`
  font-family: Share Tech Mono;
  font-size: 20px!important;

    @media screen and (max-width: 480px) {

    }
`;

const RobotRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BaseRobotImg = styled.img`
  width: 11em;
  height: 15em;
  align-items: center;
  margin: 40px;

  @media screen and (max-width: 480px) {
    width: 3em;
    height: 4em;
    margin: 20px;
  }

`;

const RobotImg = styled(FaRobot)`
  color: #000000!important;
`;

const MoneyImg = styled(GrMoney)`
`;

const RareImg = styled(FaGem)`
  color: #000000!important;
`;

const MerchImg = styled(FaTshirt)`
  color: #000000!important;
`;

const GameImg = styled(IoLogoGameControllerB)`
  color: #000000!important;
`;

const VoteImg = styled(GiToyMallet)`
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
          <DetailsHeader className="vertical-timeline-element-title">R-Day</DetailsHeader>
          <Details>
            The day of the Robot Uprising. October 1st the original 4,444 2D bots are available to mint for 0.15 SOL
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<MarketImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">Secondary Marketplace</DetailsHeader>
          <Details>
             Bots listed on all major Solana Marketplaces, including Solanart, Digital Eyes, FTX_US, and Magic Eden
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<RareImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">Rarities Released</DetailsHeader>
          <Details>
            Rarity Chart will be released, as well as an official ranking system on HowRare.is
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<GiftImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">USB Airdrop </DetailsHeader>
          <Details>
            USB NFT Airdropped to all bot holders with DELISTED bots. Needed to initiate the 3D upgrade
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<ThreeDImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">3D Upgrade + Public Mint</DetailsHeader>
          <Details>
            2D bots are available to upgrade on our site. An additional xxxx released in a public sale using Fair Launch Protocol
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<CoinImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">$ROBO Launch</DetailsHeader>
          <Details>
            Tokenomics finalized and launch of our in-game token
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<GameImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">Battle Arena </DetailsHeader>
          <Details>
            Beta Launch of the Battle Arena, A simulated, tournament style competition for 3D robots to battle and earn $ROBO
          </Details>
        </StyledVerticalTimelineElement>

      </VerticalTimeline>

    </RoadmapContainer>

  );

}

import React from "react";
import styled from "styled-components";
import { TopSection } from "./topSection";
import { ColoredLine } from "../../components/line";
import { AboutSection } from "./aboutSection";
import { TeamSection } from "./teamSection";
import { RoadmapSection } from "./roadmapSection";
import { FooterSection } from "./footerSection";


const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;

export function Homepage(props) {
  return(
      <PageContainer>
        <TopSection />
        <ColoredLine />
        <AboutSection />
        <TeamSection />
        <RoadmapSection />
        <FooterSection />
      </PageContainer>
    );
}

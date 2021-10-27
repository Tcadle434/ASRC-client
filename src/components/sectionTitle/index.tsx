const { default: styled } = require("styled-components");

export const SectionTitle = styled.h1`
  font-size: 64px;
  font-weight: 400;
  color: #16B1F3;
  font-family: Share Tech Mono;


  @media screen and (max-width: 480px) {
  text-align: center;
  font-size: 36px;
}
`;

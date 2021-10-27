import { theme } from "../../theme";
const { default: styled } = require("styled-components");


export const ColoredLine = styled.div`
  border: 2px solid ${theme.primary};
  width: 100%;
`;

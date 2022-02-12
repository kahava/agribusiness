import styled from "styled-components";
import { Link } from "react-scroll";
export const Button = styled(Link)`
  display: flex;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;

  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  border-radius: 50px;

  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ dark }) => (dark ? "#fff" : "#010606")};
  }
`;

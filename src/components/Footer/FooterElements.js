import styled from "styled-components";

export const FooterContainer = styled.div`
  position: bottom;
  background: #10b7a1;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;

export const FooterCopy = styled.h1`
  color: #fff;
  font-size: 18px;
  font-family: sans-serif;
  @media screen and (max-width: 768px) {
    height: 100%;
    padding-top: 20px;
    font-size: 12px;
   
  }
  @media screen and (max-widhth: 480px) {
    height: 100%;
    font-size: 12px;
`;

export const WebDesigner = styled.h1`
  color: #fff;
  font-size: 18px;
  font-family: sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    height: 100%;
  }
  @media screen and (max-widhth: 480px) {
    font-size: 12px;
    height: 100%;
  }
`;

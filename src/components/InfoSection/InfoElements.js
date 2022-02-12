import styled from "styled-components";

export const InfoContainer = styled.div`
  color: red;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 5px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 24px;
  margin-left: auto;
  margin-right: auto;

  z-index: 1;
  height: 860px;
  max-width: 1100px;
  width: 100%;
  @media screen and (max-width: 480px) {
    padding: 0 30px;
  }
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
  @media screen and (max-width: 480px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    height: 600px;
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width: 768px) {
    height: 430px;
    padding: 0;
  }
  @media screen and (max-widhth: 480px) {
    height: 430px;
    padding: 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    height: 350px;
    padding: 0;
  }
  @media screen and (max-widhth: 480px) {
    height: 350px;
    padding: 0;
    margin-bottom:10px;
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
  max-width: 540px;
`;
export const TopLine = styled.p`
  color: #00b33c;
  // color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 35px;
  max-width: 440px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  background: url("./kahava.jpg");

  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

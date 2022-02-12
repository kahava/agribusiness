import styled from "styled-components";
export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  justify-content: center;
  align-items: center;
  background: #e6ffe6;
  padding-right: 10px;
  padding-left: 10px;

  @media screen and (max-width: 768px) {
    height: 1600px;
    padding-top: 20px;
  }
  @media screen and (max-widhth: 480px) {
    height: 1600px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 15px;
  padding: 0 10px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding-top: 20px;
    margin-bottom: 20px;
  }
`;

export const ServicesCard = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  max-height: 340px;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.2s easy-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s easy-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  width: 200px;
  height: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  // color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 20px;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  justify-content: center;
  align-items: center;
  background: #e6ffe6;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-widhth: 480px) {
    height: 1100px;
  }
`;
export const AboutHeading = styled.h1`
  margin-bottom: 10px;
  line-height: 1;
  font-weight: 500;
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
export const AboutH2 = styled.h2`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  text-transform: uppercase;
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const AboutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 15px;
  padding: 0 10px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const AboutMkopa = styled.div`
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
export const MkopaImg = styled.img`
  width: 200px;
  height: 160px;
  margin-bottom: 10px;
`;
export const Mkopah1 = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const MkopaP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
export const AboutIsaya = styled.div`
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
export const IsayaImg = styled.img`
  width: 200px;
  height: 160px;
  margin-bottom: 10px;
`;
export const Isayah1 = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const IsayaP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

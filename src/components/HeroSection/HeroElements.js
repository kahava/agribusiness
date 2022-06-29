import styled from "styled-components";
import { MdArrowForward, MdArrowRight } from "react-icons/md";
import background from "../../images/svgCado.jfif";
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    height: 600px;
  }

  @media screen and (max-width: 480px) {
    height: 600px;
  }
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(${background}),
      radial-gradient(rgb(163, 132, 132), rgb(0, 0, 0));
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-family: sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
export const HeroP = styled.p`
  font-size: 24px;
  max-width: 600px;
  text-align: center;
  color: #fff;
  margin-top: 24px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

// export const HeroBtnWrapper = styled.div`
//   margin-top: 32px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// export const ArrowForward = styled(MdArrowForward)`
//   margin-lefft: 8px;
//   font-size: 20px;
// `;
// export const ArrowRight = styled(MdArrowRight)`
//   margin-left: 8px;
//   font-size: 20px;
// `;

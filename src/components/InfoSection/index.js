import React from "react";
import { Button } from "../Button/ButtonElements";
import {
  Column2,
  ImgWrap,
  Column1,
  // BtnWrapper,
  Img,
  TextWrapper,
  TopLine,
  InfoRow,
  InfoWrapper,
  InfoContainer,
  Heading,
  SubTitle,
} from "./InfoElements";

import icon5 from "../../images/avo2.jpeg";

const InfoSection = ({
  lightText,
  lightBg,
  id,
  darkText,
  buttonLabel,
  topLine,
  //img,
  alt,
  headLine,
  description,
  imgStart,
  // dark,
  // dark2,
  // primary,
  // big,
  // fontBig,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                {/* <BtnWrapper>
                  <Button
                    to="home"
                    smooth={true}
                    spy={true}
                    duration={500}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    fontBig={fontBig}
                    big={big}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrapper> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={icon5} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

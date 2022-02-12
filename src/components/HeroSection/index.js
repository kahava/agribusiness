import React, { useState } from "react";

import {
  HeroContainer,
  HeroBg,
  HeroP,
  HeroH1,
  HeroBtnWrapper,
  HeroContent,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../Button/ButtonElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>Fahamu.Wekeza.Nufaika </HeroH1>
        <h2 style={{ color: "#fff" }}>na Kilimo biashara</h2>
        <HeroP>
          Nufaika kwa kuwekeza katika kilimo cha parachichi uwe mmoja kati ya
          watanzania Zaidi ya 10,000 wanaojihusisha na kilimo biashara cha
          parachichi
        </HeroP>
        {/* <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            big="true"
            fontBig="true"
          >
            jifunze sasa! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

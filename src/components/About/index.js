import {
  Isayah1,
  IsayaImg,
  IsayaP,
  Mkopah1,
  MkopaImg,
  MkopaP,
  AboutContainer,
  AboutH2,
  AboutHeading,
  AboutIsaya,
  AboutMkopa,
  AboutWrapper,
} from "./AboutElements";

import Isaya from "../../images/isaya.svg";
import Mkopa from "../../images/mkopa.svg";

const Aboutus = () => {
  return (
    <AboutContainer id="kuhusu sisi">
      <AboutHeading>KUHUSU SISI</AboutHeading>
      <AboutH2></AboutH2>
      <AboutWrapper>
        <AboutMkopa>
          <MkopaImg src={Mkopa} />
          <Mkopah1>Virtus Mkopa</Mkopah1>
          <MkopaP>
            Nafurahi kuona wanafuzi wa nchini kwetu wakiwa kipaumbele kuifanya
            Tanzania kuwa ya viwanda. Naamini zao la parachichi litasaidia
            maedeleo ya viwanda Tanzania
          </MkopaP>
        </AboutMkopa>
        <AboutIsaya>
          <IsayaImg src={Isaya} />
          <Isayah1>Isaya Faustine</Isayah1>
          <IsayaP>
            Napenda kujihusisha na sayansi na maendeleo ya kiteknolojia katika
            ubunifu. Nimedhamiria kuifanya Tanzania mpya na ya kisasa. Naamini
            kuwa Tanzania tunaenda kunufaika sana kupitia kilimo cha parachichi
          </IsayaP>
        </AboutIsaya>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default Aboutus;

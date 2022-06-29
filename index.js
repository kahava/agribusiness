import {
  Isayah1,
  IsayaImg,
  IsayaP,
  Mkopah1,
  MkopaImg,
  MkopaP,
  AboutContainer,
  AboutIsaya,
  AboutMkopa,
  AboutWrapper,
  AboutHeading,
  AboutCad,
  TopDetails,
  TopImage,
  DetailP,
  AboutH2,
} from "./AboutElements";

import Isaya from "../../images/isaya.svg";
import Mkopa from "../../images/mkopa.svg";
import IfundaGate from "../../images/ifundaGeti.jpg";
import IfundaStudent from "../../images/ifundaStudent.jpg";
import IfundaShule from "../../images/ifundaShule.jpg";
import IfundaPalizi from "../../images/ifundaPalizi.jpg";
import IfundaDom from "../../images/ifundaDom.jpg";

const AboutUs = () => {
  return (
    <AboutContainer id="kuhusu sisi">
      <AboutWrapper>
        <TopDetails>
          <AboutHeading>kuhusu sisi</AboutHeading>
          <DetailP>
            Shule ya Sekondari ya Ufundi Ifuda ilianzishwa mwaka 1964 Rasmi kama
            shule ya kutoa mafunzo ya ufundi.
          </DetailP>
          <DetailP>
            Ndani ya ifunda sekondari mbali na masomo ya ufundi wanafunzi pamoja
            na walimu wanashirikiana katika vumbuzi mbalimbali juu ya masuala
            hasa yanayolenga kuleta msukumo chanya na maendeleo kwa jamii.
          </DetailP>
          <DetailP>
            Pia hujiusisha katika biashara mbalimbali kama vile biashara ya zao
            la parachichi.
          </DetailP>
        </TopDetails>
        <TopImage>
          <img
            src={IfundaGate}
            alt="Ifunda Getini"
            style={{ height: "100%", width: "100%" }}
          />
        </TopImage>
        <AboutCad>
          <img
            src={IfundaStudent}
            style={{ height: "100%", width: "100%" }}
            alt="wanafunzi wa ifunda "
          />
        </AboutCad>
        <AboutCad>
          <img
            src={IfundaPalizi}
            style={{ height: "100%", width: "100%" }}
            alt=" miche iliyotunzwa vizuri"
          />
        </AboutCad>
        <AboutCad>
          <img
            src={IfundaShule}
            style={{ height: "100%", width: "100%" }}
            alt="wanafunzi wa shule ya ufundi ifunda "
          />
        </AboutCad>
        <AboutCad>
          <img
            src={IfundaDom}
            style={{ height: "100%", width: "100%" }}
            alt="wanafunzi wa shule ya ufundi ifunda "
          />
        </AboutCad>
        <AboutMkopa>
          <MkopaImg src={Mkopa} />
          <Mkopah1>Virtus Mkopa</Mkopah1>
          <AboutH2>Mwalimu-Umeme</AboutH2>
          <MkopaP>
            Nafurahi kuona wanafuzi wa nchini kwetu wakiwa kipaumbele kuifanya
            Tanzania kuwa ya viwanda. Naamini zao la parachichi litasaidia
            maedeleo ya viwanda Tanzania
          </MkopaP>
        </AboutMkopa>
        <AboutIsaya>
          <IsayaImg src={Isaya} />
          <Isayah1>Isaya Faustine</Isayah1>
          <AboutH2>Mwanafuzi-Kidato cha pili</AboutH2>
          <IsayaP>
            Napenda kujihusisha na sayansi na maendeleo ya kiteknolojia katika
            ubunifu. Naamini kuwa Tanzania tunaenda kunufaika sana kupitia
            kilimo cha parachichi
          </IsayaP>
        </AboutIsaya>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutUs;

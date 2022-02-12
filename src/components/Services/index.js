import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";
import Hass from "../../images/hassCado.jfif";
import Fuerte from "../../images/fuerte.jpg";
import Zutano from "../../images/zutano-avocado.jpg";
import Reed from "../../images/reedCado.png";
import Shimo from "../../images/shimo.jpg";
import Minjingu from "../../images/minjingu.png";
import Mbolea from "../../images/yara.jpg";
import Palizi from "../../images/palizi.jpg";
import Madawa from "../../images/madawa.jpg";
import PandaMiche from "../../images/panda2.jpg";
import TafutaMiche from "../../images/miche.jpg";
import Mwagilia from "../../images/mwagilia.jpg";

export const Aina = () => {
  return (
    <ServicesContainer id="aina">
      <ServicesH1>Aina bora za parachichi</ServicesH1>
      <ServicesH2>
        Kuna aina mbili za parachicihi: kisasa na kienyeji. Parachichi la kisasa
        huwa na miti midogo na matunda mengi zaidi na linawahi kutoa matunda
      </ServicesH2>
      <ServicesP>
        Aina za kisasa za parachichi zilizofanyiwa utafiti na kukubalika kwa
        aajili ya wakulima na walaji ni pamoja na hizi
      </ServicesP>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Hass} />
          <ServicesH2>Hass</ServicesH2>
          <ServicesP>
            Hii ni aina maarufu sana katika aina za parachichi Ni tunda
            linalokuwa na vipere vipere Linahifadhika kwa urahisi sana
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Zutano} />
          <ServicesH2>Zutano</ServicesH2>
          <ServicesP>
            Hili ni parachichi lenye rangi ya njano-kijani inayong'aa.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Fuerte} />
          <ServicesH2>Fuerte</ServicesH2>
          <ServicesP>
            Hili ni aina ya parachichi lenye ngozi laini sana inayo ng’aa na
            kuteleza kama imepakwa na mafuta Lina kiasi kikubwa cha mafuta, ila
            linawahi kuoza.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Reed} />
          <ServicesH2>Reed</ServicesH2>
          <ServicesP>
            Hili ni parachichi lenye umbo kubwa na mviringo.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export const Maandalizi = () => {
  return (
    <ServicesContainer id="maandalizi">
      <ServicesH1>Maandalizi ya shamba na upandaji miche</ServicesH1>
      <ServicesH2>
        Unapofikilia kulima parachichi unahitaji kuwa na Ardhi, miche, mbolea,
        madawa, na wafanyakazi kwa wakati mwingine. Nunua miche kwa wauzaji
        walioidhinishwa kwa kuzalisha miche bora inayo kidhi viwango.
      </ServicesH2>
      <ServicesP>
        Andaa shamba kwa kulisafisha vizuri kabisa na kisha kulima. Baada ya
        kulima itahitajika kupiga haro ili kulainisha udongo na kuchanganya
        rutuba asili iliyopo kwenye shamba.
      </ServicesP>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Shimo} />
          <ServicesH2>Chimba mashimo</ServicesH2>
          <ServicesP>
            Kwa ekari moja kwa umbali wa mita 7 shimo kwa shimo inahitajika kuwa
            na mashimo 82. Chimba mashimo yenye urefu futi 2.5 na upana futi
            2.5.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Minjingu} />
          <ServicesH2>Weka mbolea kwenye mashimo</ServicesH2>
          <ServicesP>
            Changanya samadi, mbolea ya minjingu iliyoboreshwa na udongo kisha
            fukia katika mashimo uliyochimba.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={TafutaMiche} />
          <ServicesH2>Tafuta miche</ServicesH2>
          <ServicesP>
            Hapa inahitajika kufanua uamuzi wa aina ya mbegu unayohitaji
            kupanda. Tunapendekeza kupanda aina ya Hass kwakuwa ni mbegu
            iliyothibitishwa kufanya vizuri katika soko la ndani na kimataifa.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={PandaMiche} />
          <ServicesH2>Panda miche</ServicesH2>
          <ServicesP>
            Baada ya mchanganyiko wa mbolea kukaa kwa muda kwenye ardhi, chimba
            katikati ya mchanganyiko kisha panda mche mmoja kwa kila shimo.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export const Matunzo = () => {
  return (
    <ServicesContainer id="matunzo">
      <ServicesH1>Matunzo</ServicesH1>
      <ServicesH2>
        Mimea yako kustawi vizuri inahita maji, virutibisho, palizi, na kinga
        kwa wadudu na magonjwa.
      </ServicesH2>
      <ServicesP>
        unapozingatia matunzo inakuwezesha kupata mavuno mengi na yenye kiwango
        kinachokubalika
      </ServicesP>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Mwagilia} />
          <ServicesH2>Umwagiliaji</ServicesH2>
          <ServicesP>
            Mmea unahitaji maji, hivyo katika kipindi cha jua utahitaji
            kumwagilia ili ustawi kwa ubora. Unaweza ukaweka mfumo wa kumwagilia
            kwa matone au ukawa unamwagilia angalau lita 10 baada ya siku 3
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Mbolea} />
          <ServicesH2>Mbolea</ServicesH2>
          <ServicesP>
            utahitaji mbolea aina ya NPK au Yara Mira winner kwaajili ya
            kuupatia mmea virutubisho kupiti mizizi. Pia utahitaji busta kwa
            kuupatia mmea virutubisho kwa njia ya majani
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Palizi} />
          <ServicesH2>Palizi</ServicesH2>
          <ServicesP>
            Inahitajika kuondoa magugu na kupogolea kuhakilisha mmea unastawi
            vizuri na hausumbuliwi na magugu. Mche unapofikisha takribani umri
            wa mwaka mmoja na nusu utaaza kutoa maua. inashauriwa kuyaondoa maua
            hayo ya kwanza kuepusha kudumaza mti kwakuwa mti unakuwa bado hauna
            nguvu ya kubeba matunda
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Madawa} />
          <ServicesH2>Zuia wadudu</ServicesH2>
          <ServicesP>
            Kuzuia wadudu sumbufu katika miti ya parachichi unahitaji kutumia
            dawa za wadudu mwanzoni mwa msimu wa mvua, katikati na mwishoni mwa
            msimu wa mvua. Pia kwa maeneo yenye ukungu unahitaji kutumia dawa za
            kuzuia fangasi
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

import React from "react";
import {
  BsExclamationTriangleFill,
  BsGearFill,
  BsFillHddNetworkFill,
} from "react-icons/Bs";
import { ImWrench, ImPowerCord, ImPower } from "react-icons/Im";
import {
  GiUpgrade,
  GiCircuitry,
  GiBatteryPack,
  GiLed,
  GiLightBulb,
  GiEyeShield,
  GiFire,
} from "react-icons/Gi";
import { SlMagnifierAdd } from "react-icons/Sl";
import { SiKasasmart } from "react-icons/Si";
export const ServicesData = [
  {
    icon: <ImWrench />,
    description: "Wykonawstwo nowych instalacji elektrycznych",
  },
  {
    icon: <GiUpgrade />,
    description:
      "Modernizacja istniejących instalacji, tablic licznikowych, rozdzielnic elektrycznych",
  },
  {
    icon: <BsExclamationTriangleFill />,
    description: "Usuwanie awarii instalacji elektrycznych",
  },
  {
    icon: <ImPowerCord />,
    description:
      "Podłączenie sprzętu AGD, płyt indukcyjnych etc. (+pieczątka gwarancyjna)",
  },
  {
    icon: <ImPower />,
    description: "Montaż osprzętu elektrycznego",
  },
  {
    icon: <SlMagnifierAdd />,
    description:
      "Pomiary elektryczne oraz odbiory elektryczne, okresowe przeglądy instalacji elektrycznych",
  },
  {
    icon: <GiCircuitry />,
    description: "Prefabrykacja rozdzielnic elektrycznych,szaf sterowniczych",
  },
  {
    icon: <GiBatteryPack />,
    description: "Dobór zasilań awaryjnych UPS",
  },
  {
    icon: <GiLed />,
    description: "Montaże taśm LED",
  },
  {
    icon: <SiKasasmart />,
    description: "Realizacja rozwiązań smart home",
  },
  {
    icon: <BsGearFill />,
    description: "Montaż i naprawa automatyki domowej oraz przemysłowej",
  },
  {
    icon: <GiLightBulb />,
    description:
      "Realizacja nowatorskich oraz niekonwencjonalnych projektów, rozwiązań",
  },
  {
    icon: <BsFillHddNetworkFill />,
    description:
      "Wykonawstwo instalacji teletechnicznych (LAN, instalacje audio-wideo, kontrola dostępu)",
  },
  {
    icon: <GiEyeShield />,
    description: "Wykonawstwo systemów alarmowych SSWiN, systemów monitoringu",
  },
  {
    icon: <GiFire />,
    description: "Wykonawstwo instalacji systemu sygnalizacji pożarowej",
  },
];

export default ServicesData;

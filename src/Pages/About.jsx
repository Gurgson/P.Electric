import React from "react";
import styled from "styled-components";
import Article from "../Components/About/Article";

import Bottom from "../Components/About/Bottom";
import Top from "../Components/About/Top";
import Section from "../Components/General/Section";

function About() {
  const articlesData = [
    {
      headingText: "Doradztwo",
      svg: "/counseling-icon.svg",
      isReversed: false,
      asideText:
        "Oferujemy również doradztwo techniczne, obsługę techniczną budynków (w formie doraźnego utrzymania ruchu bądź długoterminowej współpracy) oraz wykonanie dokumentacji istniejących instalacji. Oferujemy także darmową wycenę oraz oględziny prac.",
    },
    {
      headingText: "Pracujemy na terenie małopolski",
      svg: "/malopolska.png",
      isReversed: true,
      asideText: "",
    },
  ];

  return (
    <StyledAbout id="O-Nas">
      <Top />
      <Bottom />
      {articlesData.map((data, index) => (
        <Article data={data} key={index} />
      ))}
    </StyledAbout>
  );
}
const StyledAbout = styled(Section)`
  padding-top: 0;
`;

export default About;

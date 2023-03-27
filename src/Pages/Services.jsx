import React from "react";
import styled from "styled-components";
import Gallery from "../Components/Gallery/Gallery";

import Section from "../Components/General/Section";
import CardContainer from "../Components/Services/CardContainer";

import Heading from "./../Components/General/Heading";

function Services() {
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
  ];
  const folder = "ServicesGallery";
  return (
    <StyledServices id="Uslugi">
      <Heading TextColor="--primary-color">Nasze usługi</Heading>
      <CardContainer />

      <Gallery imagesList={images} folder={folder} />
    </StyledServices>
  );
}
const StyledServices = styled(Section)``;
export default Services;

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/Ai";
import styled from "styled-components";
import { flexCenter } from "../../Styles/mixins";

function GoToTop() {
  const [isVisible, setVisibility] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setVisibility(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <Container
      className={isVisible ? "isVisible" : ""}
      onClick={() => {
        window.scrollTo(0, 0);
        setVisibility(false);
      }}
    >
      <AiOutlineArrowUp />
    </Container>
  );
}
const Container = styled(motion.div)`
  position: fixed;
  right: 30px;
  transform: 2s;
  bottom: 30px;
  width: 75px;
  height: 75px;
  scale: 0;
  transition: 1s;
  &.isVisible {
    scale: 1;
  }
  cursor: pointer;

  font-size: var(--fs-subheading);
  border: 1px solid var(--primary-color);
  ${flexCenter}
  background-color: var(--secondary-color);
  color: var(--text-color);
  border-radius: 50%;
  @media screen and (min-width: 500) {
    &:hover {
      scale: 1.2;
      transition: 1s;
      color: var(--tetriary-color);
    }
  }
`;
export default GoToTop;

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";

function Gallery({ imagesList = [], folder = "" }) {
  const nodes = imagesList.map((item, index) => {
    return (
      <a
        href={"/" + folder + "/" + item}
        target="_blank"
        className={index % 5 === 0 ? "image-grid-col-2 image-grid-row-2" : ""}
        key={index}
      >
        <img
          src={"/" + folder + "/" + item}
          loading="lazy"
          alt={`Zdjecie ${item}`}
        />
      </a>
    );
  });
  const animation = {
    initial: {
      scale: 0,
      heigth: 0,
    },
    animate: {
      heigth: "100%",
      scale: 1,
    },
    exit: {
      scale: 0,
    },
  };
  return (
    <StyledGallery
      key={nodes}
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={{ duration: 1 }}
    >
      {nodes}
    </StyledGallery>
  );
}
const StyledGallery = styled(motion.div)`
  --gap: 16px;
  --num-cols: 5;
  --row-height: 300px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  //

  box-sizing: border-box;
  padding: var(--gap);

  display: grid;
  grid-template-columns: repeat(var(--num-cols), 1fr);
  grid-auto-rows: var(--row-height);
  gap: var(--gap);

  & a {
    display: block;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media screen and (min-width: 500px) {
        &:hover {
          transition: 1s;
          transform: scale(120%);
        }
      }
    }
    &.image-grid-col-2 {
      grid-column: span 2;
    }
    &.image-grid-row-2 {
      grid-row: span 2;
    }
  }
  @media screen and (max-width: 1024px) {
    --num-cols: 2;
    --row-height: 200px;
  }
`;
export default Gallery;

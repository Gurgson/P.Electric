import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import styled from "styled-components";
import { sectionPadding } from "../../Styles/mixins";

function Section({ className, children }) {
  return (
    <AnimatePresence>
      <StyledSection
        className={className}
        // key={index}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 1000 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </StyledSection>
    </AnimatePresence>
  );
}
const StyledSection = styled(motion.section)`
  ${sectionPadding}
`;
export default Section;

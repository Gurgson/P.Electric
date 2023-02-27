import { css } from "styled-components";

export const absoluteCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const boxShadow = css`
  -webkit-box-shadow: 0px 2px 25px -12px rgba(162, 123, 92, 0.84);
  -moz-box-shadow: 0px 2px 25px -12px rgba(162, 123, 92, 0.84);
  box-shadow: 0px 2px 25px -12px rgba(162, 123, 92, 0.84);
`;

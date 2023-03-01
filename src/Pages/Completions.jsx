import React from "react";
import styled from "styled-components";
import Card from "../Components/Completions/Card";
import Heading from "./../Components/General/Heading";
import Slider from "../Components/Slider/Slider";
import { CompletionsData } from "../Data/CompletionsData";
import { sectionPadding } from "../Styles/mixins";

function Completions() {
  const data = CompletionsData;
  const nodes = data.map((x, index) => <Card key={index} data={x}></Card>);
  return (
    <StyledCompletions id="Realizacje">
      <Heading> Nasze prace</Heading>
      <Slider items={nodes} />
    </StyledCompletions>
  );
}

const StyledCompletions = styled.section`
  background-color: var(--primary-color);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1019%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(44%2c 54%2c 57%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c818.414C148.141%2c790.499%2c244.359%2c656.728%2c359.59%2c559.533C459.251%2c475.471%2c568.524%2c402.727%2c629.469%2c287.469C692.698%2c167.892%2c721.737%2c32.706%2c709.384%2c-101.994C696.622%2c-241.162%2c654.204%2c-382.088%2c558.71%2c-484.125C464.74%2c-584.534%2c324.272%2c-616.243%2c192.209%2c-654.605C60.51%2c-692.862%2c-71.354%2c-723.159%2c-207.506%2c-706.699C-362.234%2c-687.993%2c-523.886%2c-658.667%2c-639.424%2c-554.064C-760.812%2c-444.165%2c-844.914%2c-286.157%2c-852.669%2c-122.595C-860.183%2c35.878%2c-748.04%2c167.219%2c-680.427%2c310.741C-613.735%2c452.309%2c-584.11%2c620.143%2c-458.683%2c713.725C-330.389%2c809.446%2c-157.3%2c848.055%2c0%2c818.414' fill='%23242c2f'%3e%3c/path%3e%3cpath d='M1920 1585.23C2013.372 1597.789 2101.952 1536.0810000000001 2174.395 1475.847 2241.585 1419.981 2267.995 1334.4859999999999 2312.214 1259.118 2362.317 1173.721 2446.507 1102.471 2451.4719999999998 1003.586 2456.7290000000003 898.885 2406.379 797.232 2339.454 716.5409999999999 2271.708 634.86 2178.108 577.495 2075.53 550.312 1974.561 523.555 1868.742 534.7 1768.882 565.338 1669.897 595.7080000000001 1557.525 632.479 1509.224 724.0609999999999 1461.608 814.344 1522.0720000000001 921.588 1527.231 1023.528 1531.22 1102.345 1503.1680000000001 1183.603 1536.112 1255.316 1569.027 1326.966 1646.284 1361.467 1706.084 1412.859 1776.97 1473.779 1827.367 1572.771 1920 1585.23' fill='%23344043'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1019'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  ${sectionPadding};
  padding: 50px 0;
`;

export default Completions;

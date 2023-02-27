import React from "react";
import styled from "styled-components";
import Card from "../Components/Completions/Card";
import Heading from "../Components/Heading";
import { CompletionsData } from "../Data/CompletionsData";

function Completions() {
  const data = CompletionsData;
  const nodes = data.map((x, index) => <Card key={index} data={x}></Card>);
  return (
    <StyledCompletions id="Realizacje">
      <Heading HeadingText="Co zrobiliśmy" />
      {nodes}
    </StyledCompletions>
  );
}

const StyledCompletions = styled.section`
  background-color: var(--primary-color);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1400' height='560' preserveAspectRatio='none' viewBox='0 0 1400 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1101%26quot%3b)' fill='none'%3e%3crect width='1400' height='560' x='0' y='0' fill='rgba(44%2c 54%2c 57%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c445.216C81.668%2c433.899%2c116.322%2c333.393%2c187.307%2c291.455C262.555%2c246.998%2c376.822%2c267.005%2c425.032%2c194.105C472.802%2c121.871%2c443.423%2c22.984%2c419.984%2c-60.385C398.584%2c-136.5%2c356.17%2c-204.692%2c297.888%2c-258.121C243.763%2c-307.74%2c174.273%2c-333.104%2c103.044%2c-350.937C34.183%2c-368.177%2c-37.927%2c-381.027%2c-105.441%2c-359.099C-172.046%2c-337.466%2c-210.595%2c-273.104%2c-266.491%2c-230.916C-340.857%2c-174.788%2c-466.005%2c-160.678%2c-488.218%2c-70.195C-509.882%2c18.05%2c-412.495%2c89.393%2c-363.989%2c166.228C-322.249%2c232.346%2c-285.991%2c300.878%2c-223.932%2c348.444C-158.059%2c398.934%2c-82.211%2c456.609%2c0%2c445.216' fill='%23242c2f'%3e%3c/path%3e%3cpath d='M1400 1021.8489999999999C1486.964 1010.0889999999999 1566.896 981.2280000000001 1645.027 941.269 1730.991 897.304 1848.8809999999999 870.216 1877.058 777.865 1905.82 683.595 1800.692 601.558 1777.934 505.661 1758.088 422.036 1805.262 322.375 1752.804 254.293 1700.255 186.094 1598.251 190.40300000000002 1515.835 165.50099999999998 1432.673 140.37400000000002 1352.932 93.815 1267.15 107.55399999999997 1176.564 122.06200000000001 1090.732 170.75 1033.819 242.702 977.9639999999999 313.31600000000003 956.145 406.673 959.383 496.649 962.3299999999999 578.5360000000001 1028.295 640.656 1050.972 719.396 1079.217 817.471 1031.201 947.006 1108.3319999999999 1013.844 1183.353 1078.854 1301.625 1035.152 1400 1021.8489999999999' fill='%23344043'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1101'%3e%3crect width='1400' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0;
`;

export default Completions;

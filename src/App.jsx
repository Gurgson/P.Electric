import React from "react";
import { Navigation } from "./Components/NavBar/Navigation";
import About from "./Pages/About";
import Completions from "./Pages/Completions";
import Services from "./Pages/Services";
function App() {
  return (
    <React.Fragment>
      <div id="#"></div>
      <Navigation />
      <About />
      <Services />
      <Completions />
    </React.Fragment>
  );
}
export default App;

import React from "react";
import { Navigation } from "./Components/NavBar/Navigation";
import About from "./Pages/About";
import Services from "./Pages/Services";
function App() {
  return (
    <React.Fragment>
      <div id="#top"></div>
      <Navigation />
      <About />
      <Services />
    </React.Fragment>
  );
}
export default App;

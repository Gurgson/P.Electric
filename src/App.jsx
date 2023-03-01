import React from "react";
import { Navigation } from "./Components/NavBar/Navigation";
import About from "./Pages/About";
import Completions from "./Pages/Completions";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Services from "./Pages/Services";
function App() {
  return (
    <React.Fragment>
      <div id="#"></div>
      <Navigation />
      <About />
      <Services />
      <Completions />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
export default App;

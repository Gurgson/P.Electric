import React from "react";
import { Navigation } from "./Components/NavBar/Navigation";
import About from "./Pages/About";
function App() {
  return (
    <React.Fragment>
      <Navigation />
      <About />
    </React.Fragment>
  );
}
export default App;

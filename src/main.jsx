import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Styles/globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Completions from "./Pages/Completions";
import Contact from "./Pages/Contact";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />

    <BrowserRouter>
      <Header />
      <Routes>
        {["", "O-Nas"].map((path) => (
          <Route path={path} element={<About />} />
        ))}
        {/* <Route path="/" element={<About />} /> */}
        <Route path="Uslugi" element={<Services />} />
        <Route path="Realizacje" element={<Completions />} />
        <Route path="Kontakt" element={<Contact />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

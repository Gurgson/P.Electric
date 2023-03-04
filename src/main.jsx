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
import Page404 from "./Pages/Page404";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />

    <BrowserRouter>
      <Header />
      <Routes>
        {["", "O-Nas"].map((path, index) => (
          <Route path={path} element={<About />} key={index} />
        ))}

        <Route path="Uslugi" element={<Services />} />
        <Route path="Realizacje" element={<Completions />} />
        <Route path="Kontakt" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import CountryModal from "./CountryModal";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}/>
        <Route path="country/:name" element={<CountryModal />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);

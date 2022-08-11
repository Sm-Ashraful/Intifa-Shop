import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/HomePage";
import ProductListPage from "./containers/ProductListPage";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/:slug" element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

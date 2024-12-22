import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </div>
  );
};

export default App;

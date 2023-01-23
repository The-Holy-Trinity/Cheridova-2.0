import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Aboutus from "./pages/Aboutus";
import MyCatalog from "./pages/MyCatalog";
import OutfitNew from "./pages/OutfitNew";
import OutfitProtectedIndex from "./pages/OutfitProtectedIndex";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route exact path="/Categories" element={<Category {...props} />} />
        <Route exact path="/About" element={<Aboutus />} />
        <Route exact path="/MyCatalog" element={<MyCatalog />} />
        <Route exact path="/MyUploads" element={<OutfitProtectedIndex />} />
        <Route exact path="/Upload" element={<OutfitNew />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

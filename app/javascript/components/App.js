import React, { useState, useEffect } from "react";
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
import OutfitIndex from "./pages/OutfitIndex";
import OutfitShow from "./pages/OutfitShow";
import OutfitFormal from "./pages/OutfitFormal";
import OutfitDate from "./pages/OutfitDate";
import OutfitEdit from "./pages/OutfitEdit";
import OutfitCasual from "./pages/OutfitCasual";
import OutfitOffice from "./pages/OutfitOffice";

const App = (props) => {
  const [outfits, setOutfits] = useState([]);
  useEffect(() => {
    readOutfits();
  }, []);

  const readOutfits = () => {
    fetch("/outfits")
      .then((response) => response.json())
      .then((payload) => {
        setOutfits(payload);
      })
      .catch((error) => console.log(error));
  };
  const createOutfit = (outfit) => {
    fetch("/outfits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ outfit }),
    })
      .then((response) => response.json())
      .then(() => readOutfits())
      .catch((error) => console.error(error));
  };

  const deleteOutfit = (id) => {
    fetch(`http://localhost:3000/outfits/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readOutfits())
      .catch((errors) => console.log("delete errors:", errors));
  };

  const updateOutfit = (outfit, id) => {
    console.log(outfit, id);
    fetch(`http://localhost:3000/outfits/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ outfit }),
    })
      .then((response) => response.json())
      .then(() => readOutfits())
      .catch((error) => console.error(error));
  };

  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route exact path="/Categories" element={<Category {...props} />} />
        <Route exact path="/About" element={<Aboutus />} />
        <Route exact path="/MyCatalog" element={<MyCatalog />} />
        <Route
          exact
          path="/MyUploads"
          element={
            <OutfitProtectedIndex
              {...props}
              outfits={outfits}
              updateOutfit={updateOutfit}
              deleteOutfit={deleteOutfit}
            />
          }
        />
        <Route
          exact
          path="/Upload"
          element={
            <OutfitNew
              {...props}
              createOutfit={createOutfit}
              readOutfits={readOutfits}
            />
          }
        />
        <Route
          exact
          path="/OutfitsShow/:id"
          element={<OutfitShow outfits={outfits} />}
        />
        <Route
          path="/OutfitEdit/:id"
          element={
            <OutfitEdit
              {...props}
              updateOutfit={updateOutfit}
              outfits={outfits}
            />
          }
        />
        <Route
          exact
          path="/Outfits"
          element={<OutfitIndex outfits={outfits} />}
        />
        <Route
          exact
          path="/OutfitsDate"
          element={<OutfitDate outfits={outfits} />}
        />
        <Route
          exact
          path="/OutfitsFormal"
          element={<OutfitFormal outfits={outfits} />}
        />
        <Route
          exact
          path="/OutfitsCasual"
          element={<OutfitCasual outfits={outfits} />}
        />
        <Route
          exact
          path="/OutfitsOffice"
          element={<OutfitOffice outfits={outfits} />}
        />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

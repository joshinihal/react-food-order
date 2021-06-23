import React from "react";
import "./App.css";
import LandingCard from "./Components/landing-card/LandingCard";
import ItemsList from "./Components/menu/ItemsList";
import Header from "./Components/UI/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <LandingCard
        title="Delicious food, delivered to you."
        subtitle1="Choose your favourite meal from our broad selection of meals and enjoy a delicious lunch or dinner at home."
        subtitle2="All our meals are cooked with healthy ingredients, just in time and of course by experienced chefs."
      />
      <ItemsList />
    </React.Fragment>
  );
}

export default App;

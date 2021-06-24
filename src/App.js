import React from "react";
import "./App.css";
import LandingCard from "./Components/landing-card/LandingCard";
import ItemsList from "./Components/menu/ItemsList";
import Header from "./Components/UI/Header";
import Cart from './Components/dialog/Cart';

function App() {

  const menuItems = [
    {
      title: 'Noodles',
      ingredients: 'Fresh veggies and sauce',
      price: '150',
    },
    {
      title: 'Sandwich',
      ingredients: 'Fresh bread and veggies',
      price: '100',
    },
    {
      title: 'Pasta',
      ingredients: 'Mac and cheese',
      price: '150',
    },
    {
      title: 'Pav Bhaji',
      ingredients: 'Masala Pav and spicy veggies',
      price: '120',
    },
    {
      title: 'Pizza',
      ingredients: 'Margerita and oregano',
      price: '200',
    },
    {
      title: 'Momos',
      ingredients: 'Fried with schezwan sauce',
      price: '80',
    },
    {
      title: 'Fries',
      ingredients: 'Classic and peri peri',
      price: '120',
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <Cart />
      <LandingCard
        title="Delicious food, delivered to you."
        subtitle1="Choose your favourite meal from our broad selection of meals and enjoy a delicious lunch or dinner at home."
        subtitle2="All our meals are cooked with healthy ingredients, just in time and of course by experienced chefs."
      />
      <ItemsList menuItems={menuItems} />
    </React.Fragment>
  );
}

export default App;

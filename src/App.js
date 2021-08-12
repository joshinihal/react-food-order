import React, {useState, useEffect} from "react";
import "./App.css";
import LandingCard from "./Components/landing-card/LandingCard";
import ItemsList from "./Components/menu/ItemsList";
import Header from "./Components/UI/Header";
import Cart from './Components/dialog/Cart';
import Background from "./Components/UI/Background";
import useHttp from "./hooks/use-http";
import apiBaseUrl from './config';

function App() {

  const url = `${apiBaseUrl}/meals.json`;
  const [showCart, setShowCart] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const {sendRequest: fetchMealsData, error, isLoading} = useHttp();

  useEffect(()=>{
    const transformMeals = (menus) => {
      let menuItemsArray = [];
      for (const mealKey in menus){
        menuItemsArray.push({
          id: mealKey,
          title: menus[mealKey].title,
          ingredients: menus[mealKey].ingredients,
          price: menus[mealKey].price,
        });
      }
      setMenuItems(menuItemsArray);
    };

    fetchMealsData(url, transformMeals);
  }, [fetchMealsData]);

  const onCartClick = () => {
    setShowCart(true);
  };

  const onCartCloseClick = () => {
    setShowCart(false);
  };

  const onOrderClick = () => {
    console.log('Ordering...');
  };

  const onRetry = () => {
    fetchMealsData();
  };

  let content = '';

  if (error) {
    content = <><p className="error-msg">{error}</p><div className="error-msg"><button className="retry-btn" onClick={onRetry}>Try Again</button></div></>;
  };

  if (isLoading) {
    content = <p className="loading-msg">Loading...</p>;
  };

  if (menuItems.length > 0) {
    content = <ItemsList menuItems={menuItems} />;
  };

  return (
    <React.Fragment>
      <Header onCartClick={onCartClick} />
        <Background />
      {showCart && <Cart onOrder={onOrderClick} onCartClose={onCartCloseClick} />}
      <LandingCard
        title="Delicious food, delivered to you."
        subtitle1="Choose your favourite meal from our broad selection of meals and enjoy a delicious lunch or dinner at home."
        subtitle2="All our meals are cooked with healthy ingredients, just in time and of course by experienced chefs."
      />
      {content}
    </React.Fragment>
  );
}

export default App;

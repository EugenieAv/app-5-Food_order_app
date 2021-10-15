import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartItem from "./components/Cart/CartItem";
import CartProvider from "./store/CartProvider";

function App() {

  const [ cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    console.log('button clicked');
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }


  return (
    <CartProvider>
      { cartIsShown &&  <CartItem onHideCart={hideCartHandler} />}
      
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

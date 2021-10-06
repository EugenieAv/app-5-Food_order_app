import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartItem from "./components/Cart/CartItem";

function App() {
  return (
    <div>
      <CartItem />
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;

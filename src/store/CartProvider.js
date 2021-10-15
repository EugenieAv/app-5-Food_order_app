import { useReducer } from "react";
import CartContext from "./cart-context"


const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    return defaultCartState;
};




const CartProvider = props => {

    // const [items, setItem] = useState([]);

    const addItemToCartHandler = (item) => {
        // items = [...items].push(item);
        // toTal

    };
    const removeItemFromCartHandler = (id) => {};

    // ici ce n'est pas dynamique encore
    const cartProvider = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }


    return(
        <CartContext.Provider value={cartProvider}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
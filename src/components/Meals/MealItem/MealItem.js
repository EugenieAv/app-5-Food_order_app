
import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price 
        })
    }

    return <li className={classes.li} id={props.id}>
        <div>
            <span className={classes.police}>{props.name}</span>
            <span className={classes.description}>{props.description}</span>
            <span className={`${classes.price} ${classes.police}`}>{price}</span>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
        </div>
    </li>
};

export default MealItem;
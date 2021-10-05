
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;


    return <li className={classes.li} id={props.id}>
        <div>
            <span className={classes.police}>{props.name}</span>
            <span className={classes.description}>{props.description}</span>
            <span className={`${classes.price} ${classes.police}`}>{price}</span>
        </div>
        <div>
            <MealItemForm id={props.id}/>
        </div>
    </li>
};

export default MealItem;
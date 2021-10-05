import Button from '../UI/Button'
import classes from './Meal.module.css';

const Meal = (props) => {
    return <li className={classes.li} id={props.id}>
        <div>
            <span className={classes.police}>{props.name}</span>
            <span className={classes.description}>{props.description}</span>
            <span className={`${classes.price} ${classes.police}`}> $ {props.price}</span>
        </div>
        <form className={classes['add-meal-form']}>
            <div>
                <label>Amount</label>
                <input value='1'></input>
            </div>
            <Button className={classes['add-button']}>+ Add</Button>
        </ form>
    </li>
};

export default Meal;
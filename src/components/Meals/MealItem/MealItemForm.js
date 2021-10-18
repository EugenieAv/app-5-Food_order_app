import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

import { useRef, useState} from 'react';


const MealItemForm = props => {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value; // la value d'un input est TJS une string
        // console.log(enteredAmount);
        const enteredAmountNumber = + enteredAmount; //  + transforme la string en number
        if(enteredAmount.trim().length === 0 || 
            enteredAmountNumber > 5 ||
            enteredAmountNumber <1 ){
                setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }

    return(
        // <form className={classes['add-meal-form']}>
        <form className={classes.form} onSubmit={submitHandler} >
            <Input  
                ref= {amountInputRef}
                label= 'Amount'
                input={{
                    id: 'Amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
               
           />
            <button className={classes['add-button']}>+ Add</button>
            { !amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </ form>
    );
};

export default MealItemForm;
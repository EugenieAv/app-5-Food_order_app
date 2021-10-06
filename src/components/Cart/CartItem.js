import Modal from '../UI/Modal';

import classes from './CartItem.module.css';

const CartItem = props => {
    const cartItems = <ul className={classes['cart-items']}>
        {[{ id: 'c1', name: 'sushi', amount: '2', price: '29,99' }, ].map(item =>
            <li>{item.name}</li>    
        )}
    </ul>

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$ 35,90</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default CartItem;
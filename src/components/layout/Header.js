import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

import imgBanner from '../../assets/meals.jpg';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React meals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={imgBanner} alt='dinner aperitive table'/>
        </div>
    </Fragment>
};

export default Header;
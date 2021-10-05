import classes from './BoxNumber.module.css';

const BoxNumber = props => {
    return <div className={classes['border-box']}>
        {props.children}
    </div>
};

export default BoxNumber;
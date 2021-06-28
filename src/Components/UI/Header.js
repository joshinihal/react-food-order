import React, {useContext} from 'react';
import classes from './Header.module.css';
import CartContext from '../../store/cart-context';

const Header = (props) => {

    const cartCtx = useContext(CartContext);

    const onCartClick = () => {
        props.onCartClick();
    };


    return (<header>
        <div className={classes['header-div']}>
        <div className={classes['header-title']}>
            <h2>
            ReactMeals
            </h2>
        </div>
        <div onClick={onCartClick} className={classes['cart']}>
            <h3>Your cart <span className={classes['cart-count']}>{cartCtx.cartItems.length > 0
            ? cartCtx.cartItems.reduce((a, b) => ({
                amount: Number(a.amount) + (Number(b.amount)),
              })).amount
            : 0}</span></h3>
        </div>
        </div>
        
    </header>)
};

export default Header;
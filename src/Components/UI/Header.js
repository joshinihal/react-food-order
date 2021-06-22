import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (<header>
        <div className={classes['header-div']}>
        <div className={classes['header-title']}>
            <h2>
            ReactMeals
            </h2>
        </div>
        <div className={classes['cart']}>
            <h3>Your cart 2</h3>
        </div>
        </div>
        
    </header>)
};

export default Header;
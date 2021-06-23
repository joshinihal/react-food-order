import React from 'react';
import classes from './ItemsList.module.css';
import Item from './Item';

const ItemsList = (props) => {
    return (<div className={classes['list-container']}>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>

    </div>)
};

export default ItemsList;
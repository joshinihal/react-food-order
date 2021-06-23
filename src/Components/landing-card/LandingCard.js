import React from 'react';
import classes from './LandingCard.module.css';

const LandingCard = (props) => {
    return (
        <div className={classes['container']}>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <span>{props.subtitle1}</span>
            </div>
            <div>
                <span>{props.subtitle2}</span>
            </div>
        </div>
    )
};

export default LandingCard;
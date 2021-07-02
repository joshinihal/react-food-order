import React from 'react';
import classes from './LandingCard.module.css';

const LandingCard = (props) => {
    return (
        <section className={classes['container']}>
            <div>
                <h1 className={classes['title']}>{props.title}</h1>
            </div>
            <div>
                <p className={classes['subtitle']} >{props.subtitle1}</p>
            </div>
            <div>
                <p className={classes['subtitle']} >{props.subtitle2}</p>
            </div>
        </section>
    )
};

export default LandingCard;
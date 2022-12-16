import React, {useState} from 'react';
import style from './../simple-counter/SimpleCounter.module.css';

type PropsType = {
    counterValue: number;
    setCounterValue: (counterValue: number) => void;
}
export const Counter: React.FC<PropsType> = (props) => {

    const incrementCounterValue = () => {
        props.setCounterValue(props.counterValue + 1);
    }

    const decrementCounterValue = () => {
        props.setCounterValue(props.counterValue - 1);
    }

    return (
        <div className={style.counterWrapper}>
            <div className={style.counterValue}>{props.counterValue}</div>
            <div className={style.buttonWrapper}>
                <button className={style.button} onClick={incrementCounterValue}>INC</button>
                <button className={style.button} onClick={decrementCounterValue}>DEC</button>
            </div>
        </div>
    )
}
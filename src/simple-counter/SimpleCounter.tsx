import React, {useState} from 'react';
import style from './../simple-counter/SimpleCounter.module.css';

export const SimpleCounter: React.FC = (props) => {

    const [counterValue, setCounterValue] = useState<number>(0);

    const incrementCounterValue = () => {
        setCounterValue(counterValue + 1);
    }

    const decrementCounterValue = () => {
        setCounterValue(counterValue - 1);
    }

    return (
        <div className={style.counterWrapper}>
                <div className={style.counterValue}>{counterValue}</div>
                <div className={style.buttonWrapper}>
                    <button className={style.button} onClick={incrementCounterValue}>INC</button>
                    <button className={style.button} onClick={decrementCounterValue}>DEC</button>
                </div>
        </div>
    )
}
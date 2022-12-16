import React from 'react';
import style from './Counter.module.css';

type PropsType = {
    counterValue: number;
    setCounterValue: (counterValue: number) => void;
    minValue: number;
    maxValue: number;
}
export const Counter: React.FC<PropsType> = (props) => {

    const incrementCounterValue = () => {
        props.setCounterValue(props.counterValue + 1);
    }

    const resetCounterValue = () => {
        props.setCounterValue(0);
    }

    const isDisabledReset = props.counterValue === props.minValue || props.counterValue === 0;
    const isDisabledInc = props.counterValue === props.maxValue;
    const error = props.minValue === 0 && props.maxValue === 0;

    return (
        <div className={style.counterWrapper}>
            <div className={style.counterValue}>{error ? `enter values and press 'set'` : props.counterValue}</div>
            <div className={style.buttonWrapper}>
                <button className={isDisabledInc ? style.disabled : style.button}
                        onClick={incrementCounterValue}
                        disabled={isDisabledInc}>
                    INC
                </button>
                <button className={isDisabledReset ? style.disabled : style.button}
                        onClick={resetCounterValue}
                        disabled={isDisabledReset}>
                    RESET
                </button>
            </div>
        </div>
    )
}
import React, {ChangeEvent, useState} from 'react';
import style from './../simple-counter/SimpleCounter.module.css';

type PropsType = {
    setCounterValue: (counterValue: number) => void;
    minValue: number;
    setMinValue: (minValue: number) => void;
    maxValue: number;
    setMaxValue: (maxValue: number) => void;
}
export const CounterSettings: React.FC<PropsType> = (props) => {

    const onClickSetCounterValue = () => {
        props.setCounterValue(props.minValue);
    }

    const onChangeMinValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+event.currentTarget.value);
    }
    const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+event.currentTarget.value);
    }

    return (
        <div className={style.counterWrapper}>
            <div className={style.counterValue}>
                <div>
                    <input type={'number'}
                           value={props.maxValue}
                           onChange={onChangeMaxValueHandler}/>
                </div>
                <div>
                    <input type={'number'}
                           value={props.minValue}
                           onChange={onChangeMinValueHandler}/>
                </div>
            </div>
            <div className={style.buttonWrapper}>
                <button className={style.button} onClick={onClickSetCounterValue}>SET</button>
            </div>
        </div>
    )
}
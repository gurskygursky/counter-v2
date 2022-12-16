import React, {ChangeEvent} from 'react';
import style from './CounterSettings.module.css';
type PropsType = {
    counterValue: number;
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

    const isDisabledSet = props.minValue === props.maxValue;

    return (
        <div className={style.counterWrapper}>
            <div className={style.counterValue}>
                <div>
                    <span style={{display: 'inline-block'}}>max.</span>
                    <input type={'number'}
                           value={props.maxValue}
                           onChange={onChangeMaxValueHandler}
                           className={props.minValue === props.maxValue ? style.error : ''}
                    />
                </div>
                <div>
                    <input type={'number'}
                           value={props.minValue}
                           onChange={onChangeMinValueHandler}
                           className={props.minValue === props.maxValue ? style.error : ''}
                    />
                </div>
            </div>
            <div className={style.buttonWrapper}>
                <button className={isDisabledSet ? style.disabled : style.button}
                        disabled={isDisabledSet}
                        onClick={onClickSetCounterValue}>SET</button>
            </div>
        </div>
    )
}
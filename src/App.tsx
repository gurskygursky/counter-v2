import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './counter/Counter';
import {SimpleCounter} from './simple-counter/SimpleCounter';
import {CounterSettings} from './counter/CounterSettings';

export const App: React.FC = () => {

    const [counterValue, setCounterValue] = useState<number>(0);
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);

    useEffect(() => {
        const localStorageAsString = localStorage.getItem('minValue');
        if (localStorageAsString) {
            const localStorageAsNumber = JSON.parse(localStorageAsString);
            setMinValue(localStorageAsNumber)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(minValue));
    }, [minValue]);

    useEffect(() => {
        const localStorageAsString = localStorage.getItem('maxValue');
        if (localStorageAsString) {
            const localStorageAsNumber = JSON.parse(localStorageAsString);
            setMaxValue(localStorageAsNumber)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }, [maxValue]);

    return (
        <div className="App">
            {/*<h3>Simple Counter</h3>*/}
            {/*<SimpleCounter/>*/}
            <h3>Counter With Settings</h3>
            <Counter counterValue={counterValue}
                     setCounterValue={setCounterValue}
                     minValue={minValue}
                     maxValue={maxValue}
            />
            <CounterSettings counterValue={counterValue}
                             setCounterValue={setCounterValue}
                             minValue={minValue}
                             setMinValue={setMinValue}
                             maxValue={maxValue}
                             setMaxValue={setMaxValue}/>
        </div>
    );
}

import React, {useState} from 'react';
import './App.css';
import {Counter} from './counter/Counter';
import {SimpleCounter} from './simple-counter/SimpleCounter';
import {CounterSettings} from './counter/CounterSettings';

export const App: React.FC = () => {

    const [counterValue, setCounterValue] = useState<number>(0);
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);

    return (
        <div className="App">
            {/*<h3>Simple Counter</h3>*/}
            {/*<SimpleCounter/>*/}
            <h3>Counter With Settings</h3>
            <Counter counterValue={counterValue} setCounterValue={setCounterValue}/>
            <CounterSettings setCounterValue={setCounterValue}
                             minValue={minValue}
                             setMinValue={setMinValue}
                             maxValue={maxValue}
                             setMaxValue={setMaxValue}/>
        </div>
    );
}

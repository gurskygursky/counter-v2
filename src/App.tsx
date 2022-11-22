import React from 'react';
import './App.css';
import { SimpleCounter } from './simple-counter/SimpleCounter';

export const App: React.FC = () => {
    return (
        <div className='App'>
            <h3>Simple Counter</h3>
            <SimpleCounter/>
        </div>
    );
}

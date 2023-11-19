import React from 'react';
import { useSelector } from 'react-redux';

function CounterApp(props) {
    const count = useSelector(state => state.counter)
    return (
        <div>
            <p>{count}</p>
        </div>
    );
}

export default CounterApp;
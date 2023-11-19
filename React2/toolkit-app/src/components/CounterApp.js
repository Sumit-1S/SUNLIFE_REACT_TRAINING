import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/counterReducer';

function CounterApp(props) {
    const dispatch = useDispatch();
    const count = useSelector(state=>state.Counter.counter)
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>dispatch(increment())}>inc</button>
        </div>
    );
}

export default CounterApp;
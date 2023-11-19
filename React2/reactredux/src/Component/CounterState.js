import React from 'react';
import { useDispatch } from 'react-redux';
import { dec, inc, reset } from '../action/counterAction';

function CounterState(props) {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(inc())}>INCREMENT</button>
            <button onClick={()=>dispatch(dec())}>DECREMENT</button>
            <button onClick={()=>dispatch(reset())}>RESET</button>
        </div>
    );
}

export default CounterState;
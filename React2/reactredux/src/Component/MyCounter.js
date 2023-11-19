import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import CounterApp from './CounterApp';
import CounterState from './CounterState';
function MyCounter(props) {
    // const count = useSelector(state => state.counter)
    // const dispatch=useDispatch()
    return (
        <div>
            {/* <p>The Initial state is : {count}</p>
            <button onClick={()=>dispatch(inc())}>INCREMENT</button>
            <button onClick={()=>dispatch(dec())}>DECREMENT</button>
            <button onClick={()=>dispatch(reset())}>RESET</button> */}
            <CounterApp/>
            <CounterState/>
        </div>
    );
}

export default MyCounter;
import React,{useState, useEffect} from 'react';
import NotesApp from './NotesApp';

function Counter(props) {
    const [count,setCount] = useState(10)

    const increment=()=>{
        setCount(count+1)
    }  

    // useEffect(()=>{                         // <==== Called on mount and every update
    //     console.log("called Everytime on every update");
    // })
    
    // useEffect(()=>{                         // <==== Called on mount 
    //     console.log("called On Mount Only");
    // },[])
    
    useEffect(()=>{                         // <==== Called on every update 
        console.log("called Everytime on Count is updated");
    },[count])

    return (
        <div>
            <p>The Counter is : {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <button onClick={()=>{setCount(0)}}>&#8634;</button>
            <NotesApp/>
        </div>
    );
}

export default Counter;
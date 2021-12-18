import React,{useState,useEffect} from 'react'
import {render} from 'react-dom'

const app = document.createElement('div');
document.body.appendChild(app);


const App = () => {
    //const [count,setCount] = useState(0)
    let _useState = useState(0);
    console.log(_useState)
    let count = _useState[0];
    let setCount = _useState[1];
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={()=> setCount(count+1) }>++++</button>
        </div>
        
    )
}



//test
/*
let _useState = useState(0);
let count = _useState[0];
let setCount = _useState[1];
*/

let us = (x) => [x,function(){}]

console.log(us(10))

render(<App />,app)

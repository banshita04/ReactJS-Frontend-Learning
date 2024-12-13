import { useState } from "react";

function Counter() {
    // let count = 0;

    // useState() is a hook/inbuilt function
    // It is used to maintain the state of the funtional component
    // useState() returns tuple, which has 2 fields
    // One is data, and second is setter function

    let [count, setCount] = useState(0);
    let [name, setName] = useState("");

    let btnClick = () => {
        // count++;

        //for displaying in UI
        setCount(count + 1);

        //for displaying on the console
        console.log("Button Clicked " + count)
    }

    let nameChangedHandler=(event)=>{
        setName(event.target.value)
        console.log(event.target.value);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={btnClick}>Click me!</button>
            <br></br>
            <br></br>
            Enter a name: <input type="text" onKeyUp={nameChangedHandler} ></input>
            <h2>{name}</h2>

        </div>

    );
}
export default Counter;
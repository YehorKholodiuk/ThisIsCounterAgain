import {useState} from "react";
import React from "react";

function App() {
    const [counters, setCounters] = useState([
        {id: 1, counter: 5},
        {id: 2, counter: 10},

    ]);

    const [inputNum, setInput] = useState(10)
    const minus = (id) => {
        console.log(id);
        // const updatedCounters = [];
//for ( let i = 0; i < counters.length;i++){
        //if(counters[i].id) updatedCounters.push({...counters[i].id,counter:counters[i].counter - 1})
        // else updatedCounters.push(counters[i])
        const updatedCounters = counters.map(el => el.id === id ? ({...el, counter: el.counter - 1}) : el);


        setCounters(updatedCounters)
        // };
    };
    const plus = (id) => {
        console.log(id);
        // const updatedCounters = [];
//for ( let i = 0; i < counters.length;i++){
        //if(counters[i].id) updatedCounters.push({...counters[i].id,counter:counters[i].counter + 1})
        // else updatedCounters.push(counters[i])
        const updatedCounters = counters.map(el => el.id === id ? ({...el, counter: el.counter + 1}) : el);


        setCounters(updatedCounters)
        // };
    };
    const Reset = (id) => {
        const updatedCounters = counters.map(el => el.id === id ? {...el, counter: 0} : el);
        setCounters(updatedCounters)
    }
    const addCounter = () => {
        const newCounter = {id: Math.random(), counter: 0}
        setCounters([...counters, newCounter])
    }

    const DeleteThis = (id) => {
        setCounters([...counters].filter(el => el.id !== id))

    }

    const setForAll = () => {
        setCounters([...counters].map(el => ({...el, counter: inputNum})));
    }

    const up = (id) => {
        const index = counters.findIndex(el => el.id === id);
        const result = [...counters.slice(0, index - 1), counters[index], counters[index - 1], ...counters.slice(index + 1)]
        setCounters(result)
    }

    const down = (id) => {
        const index = counters.findIndex(el => el.id === id);
        const result = [...counters.slice(0, index), counters[index + 1], counters[index], ...counters.slice(index + 2)]
        setCounters(result)
    }


    return (
        <div>
            {counters.map((el, index) =>
                <div key={el.id}>
                    <button onClick={() => minus(el.id)}>Minus</button>
                    {el.counter}
                    <button onClick={() => plus(el.id)}>Plus</button>
                    <button onClick={() => Reset(el.id)}>reset</button>
                    <button onClick={() => DeleteThis(el.id)}> Delete it</button>
                    {index !== 0 ? <button onClick={() => up(el.id)}>Up</button> : null}
                    {index !== counters.length - 1 ? <button onClick={() => down(el.id)}>Down</button> : null}

                </div>)}
            <div>
                <input type="text" placeholder='enter any number' value={inputNum}
                       onChange={(event) => setInput(Number(event.target.value))}
                />
                <button onClick={setForAll}>Set For all</button>
                <input type="text" onChange={(event) => console.log(event)}/>
            </div>
            <hr/>
            <button onClick={addCounter}>Add Counter</button>


        </div>
    );
}

export default App;
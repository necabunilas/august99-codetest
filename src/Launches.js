import React, {useState} from 'react';
import Spacex from './Spacex';

function Launches(){

    const [input, setInput] = useState("");

    function handleChange(event) {
        const { value } = event.target;
        setInput(value);
    }

    return(
        <div>
            <h1>SpaceX Launches</h1>
            <input placeholder="Search Mission Name" value={input} onChange={handleChange}/>
            <button>Search</button>
        
            <Spacex />

        </div>
    )

}

export default Launches
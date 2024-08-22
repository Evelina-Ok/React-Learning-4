import { useState } from "react";

export const Counter = () => {

    const [countOne, setCountOne] = useState(0)
    function addOne () {
        setCountOne(prevValue=>prevValue+1)
    }

    const [countTwo, setCountTwo] = useState(0)
    function addTwo () {
        setCountTwo(prevValue=>prevValue+1)
    }

    return (
    <>  
            <h3>How many enemies did they kill in the battle of Helm's Deep?</h3>
        <div>
            //'add' function needs to be different on each button. 
            //Otherwise both buttons will execute the function and add to the same number
            <h4>{countOne}</h4>
            <button onClick={addOne}>Gimli</button>
        </div>
        <div>
            <h4>{countTwo}</h4>
            <button onClick={addTwo}>Legolas</button>
        </div>
    </> 
    )
}
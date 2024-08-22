import { useState } from 'react'


//(or export const Greetings = () => {})
export function Greetings() {
    const [name, setName] = useState("");

    const handleGreetings = (e) => {
        setName(e.target.value)
        console.log(e.target.value);
        
    }
    return (
        <>
        <h3>Send en hilsen til {name}</h3>
        <input onChange={handleGreetings} type="text" placeholder="din ven"/>
        </>
    )
}

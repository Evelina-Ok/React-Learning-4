import { useState } from "react";

export const TodoApp = () => {

    const [todo, setTodo] = useState([]);
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
}
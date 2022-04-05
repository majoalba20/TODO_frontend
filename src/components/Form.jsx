import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'

const Form = ({ addTodo}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() === "") return; //si el input sin espacios esta vacio retorna
        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    }

    return (
        <form className='w-1/4 p-4 flex justify-around' onSubmit={handleFormSubmit}>
            <input value={inputValue} onChange={handleInputChange} type="text" className='items-center border-inherit rounded-lg border-2 p-2' placeholder="Enter something to do..."/>
            <button type="submit"><FaPlusCircle color='green' fontSize="2em"/></button>
        </form>
    )
}

export default Form
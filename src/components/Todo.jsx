import React, {useState} from 'react'
import {FaCheckCircle, FaTimesCircle} from 'react-icons/fa'

const Todo = ({title, completed,removeTodoItemProp, editTodoItemProp}) => {

    const [isediting, setIsEditing] = useState(false);
    const [Value, setValue] = useState(title)
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);

    const HandlerDoubleClick = ()=>{
        setIsEditing(true);
    }

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
        if (key === 13) { //enter key
            editTodoItemProp({ title: tempValue });
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) { //esc key
            setTempValue(Value);
            setIsEditing(false);
        }
    }

    const handleInputOnChange =(e) => {
        setTempValue(e.target.value);
    };

    const handleButtonClick =() =>{
        setCompleted((oldCompleted) => {
            const newState = !oldCompleted;
            editTodoItemProp({ completed: newState });
            return newState;
        });
    }

    return (
        <div onDoubleClick={HandlerDoubleClick}>
        { 
        isediting ?
            <div>
                <div>
                    <input onChange={handleInputOnChange} 
                    onKeyDown={handleInputKeyDown}
                    autoFocus={true} value={tempValue}/>
                </div>
            </div>:

        <>
            <div className='flex'>
                <div className='w-3/5' onDoubleClick={HandlerDoubleClick}>
                    <h1 className={completedState ? 'text-green-500' : ''}>{Value}</h1>
                </div>
                <div className='w-1/5'>
                    <button onClick={handleButtonClick}> {completedState ? <FaCheckCircle color='blue' fontSize="2em"/> : <FaCheckCircle color='green' fontSize="2em"/>}</button>
                </div>
                <div className='w-1/5'>
                    <button onClick={removeTodoItemProp}><FaTimesCircle color='red' fontSize="2em"/></button>
                </div>
            </div>
        </>
        }
        </div>
    )
}

export default Todo
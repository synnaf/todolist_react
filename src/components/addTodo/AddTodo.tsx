import React, { useState, ChangeEvent, KeyboardEvent } from 'react'; 
import './AddTodo.scss';

// vi tar emot save-funktionen från todolist-komponeten, och vårt interface defibnierar hur det ska se ut 
export interface IAddProps {
    saveTodo(text:string): void; //en funktion som tar emot en text, returnerar inget 
}



export default function AddTodo(props: IAddProps) {
    const [userInput, setUserInput] = useState(''); 

    function update(e: ChangeEvent<HTMLInputElement>) {
        //texten vi försöker skriva in i vår input, vi kör den genom setUserInput. 
        setUserInput(e.target.value);   
    }

    function save() {
        //vi anropar från props-objektet 
        props.saveTodo(userInput); //vi skickat med texten från userInput 
        setUserInput(''); //tömer input  
    }

    function isEnter(e: KeyboardEvent) {
        if(e.which === 13) {
            save();  
        }
    }

    return (
        <>
        <div className="input-div">
            <input type="text" value={userInput} onChange={update} onKeyPress={isEnter}></input>
            <button onClick={save}>Save</button>
        </div>
        </>
    ); 
}
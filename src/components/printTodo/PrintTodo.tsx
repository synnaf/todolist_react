import React from 'react'; 
import Todo from '../../models/Todo';
import './PrintTodo.scss';

//interface för det vi vill ta emot 
export interface IPrintTodoProps {
    todos: Todo[]; //av typen todo-list 
    remove(todo: Todo): void; 
    toggle(todo: Todo): void; 
}


export default function PrintTodo(props: IPrintTodoProps) {

    function toggleTodo(todo: Todo) {
        props.toggle(todo); 
    }

    function removeTodo(todo: Todo) {
        props.remove(todo); 
    }

    // vi gör en variabel som vi mappar igenom vår lista i. 
    // vi skickar tillbaka ett li-element med current object text
    //listan finns i vårt props-objelt 
    let liElements = props.todos.map((todo: Todo) => { 
        if(todo.done) {
            return (
            <li key={todo.id} className="todo-done"> 
                <span onClick={() => {toggleTodo(todo)} }>
                    {todo.text}
                </span>  
                
            </li>); 
        }
        return (
            <li key={todo.id}> 
                <span onClick={() => {toggleTodo(todo)} }>
                    {todo.text}
                </span>
                <button onClick={() => {removeTodo(todo) }}>X</button>
            </li>) 
    }); 

    return(
        <ul>
            {liElements}
        </ul>
    ); 
}
import React, { useState } from 'react';
import './TodoList.scss';  
import Todo from '../../models/Todo';
import AddTodo from '../addTodo/AddTodo';
import PrintTodo from '../printTodo/PrintTodo';

export default function TodoList() {
    //vi använder state för att react ska veta vad vi vill uppdatera 
    let defaultValue: Todo[] = [{id: 1, text:'Test', done: false}, {id: 2, text:'Test 2', done: true}]; 
    const [todos, setTodos] = useState(defaultValue); 
    //funktionen som togglar onClick
    //objektet i listan som vi använder är todo, på varje varv i loopen. 
    //vi vill skicka rätt objekt till toggleTodo, i samma komponent genom en anonym funktion. 
    function toggleTodo(theTodoToToggle: Todo) {
        console.log(theTodoToToggle.done); 
        //här ändrar vi värdet på done i aktuellt objekt 
        theTodoToToggle.done = !theTodoToToggle.done; 
        //vi använder state-funktionen setTodos för att uppdatera vårt state. 
        //objektet som vi skickar in ska vara en ny lista, en uppdaterad lista, med objekt. 
        //vi använder en spread-operator som vi skickar med! 
        setTodos([...todos]); //ett nytt objekt av det gamla, som renderas ut i nytt state 
    }
    function removeTodo(theTodoToRemove: Todo) {
        // vi kör en filterfunktion som filtrerar vår lista, och returnerar alla objekt utöver den med r'tt id 
        let newList = todos.filter((t: Todo) => { return t.id !== theTodoToRemove.id}); 
        //vi sparar nya listan i vårt state
        setTodos([...newList]); 
    }
    //vi behöver inte ta emot ngn parameter eftersom vi redan har en userInput-variabel som vi måste få från vår AddTodo 
    //genom props kan vi skicka denna funktion till save i addtodo-komponenten
    function save(todoText: string) {
        //på save skapar vi upp ett nytt objekt av typen Todo. 
        let todo = new Todo(); 
        todo.id = todos.length + 1; 
        todo.text = todoText; //det som finns i userInput-variabeln 
        todo.done = false; 

        //till sist lägger vi till saker i listan 
        setTodos([...todos, todo]); //skapa upp en ny lista, med det nya objektet vi skapat här 
    }


    return (
        <>
        {/* här kopplar vi ihop save-funk med savetodo-funk */}
        <AddTodo saveTodo={save}></AddTodo>
        {/* här skriver vi ut listan */}
        <PrintTodo todos={todos} toggle={toggleTodo} remove={removeTodo}></PrintTodo>
        </>
    ); 
}
import React from 'react';
import Todo from './Todo';

const TodoList = ({setTodos,todos}) =>{
    return(
        <div className='todo-container'>
            <ul className='todo-list'>
                {todos.map(todo => (
                    <Todo setTodos={setTodos} todos={todos} todo ={todo} text={todo.text} key={todo.id} />
                ))}
            </ul>
            <Todo  />
        </div>
    );
}

export default TodoList;
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); 

  return (
    <div className="App">
      <h1>Hello React</h1>
      <header>
        <h1>PC's ToDo List </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos ={setTodos} ddsstodos={todos} />
    </div>
  );
}

export default App;

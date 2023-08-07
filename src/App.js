// App.js
import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos([...todos, text]);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const handleUpdateTodo = (index, updatedText) => {
    const newTodos = [...todos];
    newTodos[index] = updatedText;
    setTodos(newTodos);
  };

  const handleSearchTodo = (searchText) => {
    // Implement the logic to filter the todos based on searchText
    const filteredTodos = todos.filter((todo) =>
      todo.toLowerCase().includes(searchText.toLowerCase())
    );
    setTodos(filteredTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <SearchTodo onSearch={handleSearchTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo} />
      <AddTodo onAdd={handleAddTodo} />
    </div>
  );
}

export default App;
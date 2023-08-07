import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const [originalTodos, setOriginalTodos] = useState([]);

  // Load todos from local storage when the component mounts
  useEffect(() => {
    const storedTodosJSON = localStorage.getItem('todos');
    const storedTodos = JSON.parse(storedTodosJSON);
    if (storedTodos) {
      setTodos(storedTodos);
      setOriginalTodos(storedTodos);
    }
  }, []);

  // Save todos to local storage whenever the todos array changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    const newItem = text.trim().toLowerCase();
    if (!todos.includes(newItem)) {
      setTodos([...todos, newItem]);
      return true;
    }
    return false;
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const handleUpdateTodo = (index, updatedText) => {
    const newTodos = [...todos];
    newTodos[index] = updatedText;

    // Update both todos and originalTodos with the updated item
    setTodos(newTodos);
    setOriginalTodos(newTodos);
  };

  const handleSearchTodo = (searchText) => {
    if (searchText) {
      const filteredTodos = todos.filter((todo) =>
        todo.toLowerCase().includes(searchText.toLowerCase())
      );
      setOriginalTodos(todos); // Store original todos before applying search
      setTodos(filteredTodos);
    } else {
      // Reset todos to the original list when searchText is empty
      setTodos(originalTodos);
    }
  };

  const handleSearchBack = () => {
    setTodos(originalTodos); // Reset todos to the original list
  };

  const handleClearList = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <SearchTodo onSearch={handleSearchTodo} onBack={handleSearchBack} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo} onClearList={handleClearList} />
      <AddTodo onAdd={handleAddTodo} />
    </div>
  );
}

export default App;

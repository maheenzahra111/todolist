import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchedTodos, setSearchedTodos] = useState([]);

  useEffect(() => {
    const storedTodosJSON = localStorage.getItem('todos');
    const storedTodos = JSON.parse(storedTodosJSON);
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

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
    setTodos(newTodos);
  };

  const handleSearchTodo = (searchText) => {
    if (searchText) {
      const filteredTodos = todos.filter((todo) =>
        todo.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchedTodos(filteredTodos);
    } else {
      setSearchedTodos([]);
    }
  };

  const handleMyList = () => {
    setSearchedTodos([]); // Clear the searched todos
  };

  const handleClearList = () => {
    setTodos([]); // Clear the entire list
  };

  return (
    <div className="container">
      <h1> My Todo List</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={searchedTodos.length > 0 ? searchedTodos : todos} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo} onClearList={handleClearList} />
      <SearchTodo onSearch={handleSearchTodo} onBack={handleMyList} />
    </div>
  );
}

export default App;

// SearchTodo.js
import React, { useState } from 'react';

function SearchTodo({ onSearch }) {
    const [searchText, setSearchText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchText);
    };

    return (
        <form className="search-todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search todo"
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchTodo;

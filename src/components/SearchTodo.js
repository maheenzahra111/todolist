import React, { useState } from 'react';

function SearchTodo({ onSearch, onBack }) {
    const [searchText, setSearchText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchText);
    };

    const handleBack = () => {
        setSearchText(''); // Clear search input when going back
        onBack();
    };

    return (
        <div className="search-todo">
            <form className="search-todo-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search todo"
                />
                <button type="submit">Search</button>
            </form>
            <div className="back-button-container">
                <button className="back-button" onClick={handleBack}>Back</button>
            </div>
        </div>
    );
}

export default SearchTodo;

import React, { useState } from 'react';

function SearchTodo({ onSearch, onBack }) {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
        const newSearchText = e.target.value;
        setSearchText(newSearchText);
        onSearch(newSearchText);
    };

    const handleMyList = () => {
        setSearchText(''); // Clear the search text
        onBack(); // Go back to the original list
    };

    return (
        <div className="search-todo">
            <form className="search-todo-form">
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="Search todo"
                />
                {searchText && <button className="my-list-button" onClick={handleMyList}>Cancel</button>}
            </form>
        </div>
    );
}

export default SearchTodo;

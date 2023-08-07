// AddTodo.js
import React, { useState } from 'react';

function AddTodo({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            const newItem = text.trim().toLowerCase();
            const existingItem = onAdd(newItem);
            if (!existingItem) {
                alert("item already exist.") // Clear the input field if not a duplicate
            } else {
                // Handle the case where it's a duplicate
                console.log('Item already exists');
            }
        }
        setText('');
    };


    return (
        <form className="add-todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;

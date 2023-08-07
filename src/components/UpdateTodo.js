// UpdateTodo.js
import React, { useState } from 'react';

function UpdateTodo({ text, onUpdate }) {
    const [updatedText, setUpdatedText] = useState(text);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (updatedText.trim()) {
            onUpdate(updatedText);
        }
    };

    return (
        <form className="update-todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
                placeholder="Update todo"
            />
            <button type="submit">Update</button>
        </form>
    );
}

export default UpdateTodo;

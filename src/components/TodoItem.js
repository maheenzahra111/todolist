// TodoItem.js
import React, { useState } from 'react';
import UpdateTodo from './UpdateTodo';

function TodoItem({ text, onDelete, onUpdate }) {
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdate = (updatedText) => {
        setIsUpdating(false);
        onUpdate(updatedText);
    };

    return (
        <li className={`todo-item${isUpdating ? ' updating' : ''}`}>
            {isUpdating ? (
                <UpdateTodo text={text} onUpdate={handleUpdate} />
            ) : (
                <div className="todo-content">
                    <div className="todo-text">{text}</div>
                    <div className="button-container">
                        <button className="update-btn" onClick={() => setIsUpdating(true)}>
                            Update
                        </button>
                        <button className="delete-btn" onClick={onDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </li>
    );
}

export default TodoItem;

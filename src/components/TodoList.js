import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onUpdate, onClearList }) {
    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        text={todo}
                        onDelete={() => onDelete(index)}
                        onUpdate={(updatedText) => onUpdate(index, updatedText)}
                    />
                ))}
            </ul>
            {todos.length > 0 && (
                <div className="clear-list-button">
                    <button classname="clear-list-button" onClick={onClearList}>Clear List</button>
                </div>
            )}
        </div>
    );
}

export default TodoList;

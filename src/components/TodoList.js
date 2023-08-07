// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onUpdate }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} text={todo} onDelete={() => onDelete(index)} onUpdate={(updatedText) => onUpdate(index, updatedText)} />
            ))}
        </ul>
    );
}

export default TodoList;
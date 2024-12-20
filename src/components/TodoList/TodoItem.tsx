import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo } from '../../store/slices/todoSlice';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleUpdate = () => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-4 p-2 border-b">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
        className="h-4 w-4"
      />
      {isEditing ? (
        <div className="flex gap-2 flex-1">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-2 py-1 border rounded"
          />
          <button
            onClick={handleUpdate}
            className="px-2 py-1 bg-green-500 text-white rounded"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-2 py-1 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span className={`flex-1 ${completed ? 'line-through' : ''}`}>
            {text}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteTodo(id))}
            className="px-2 py-1 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};
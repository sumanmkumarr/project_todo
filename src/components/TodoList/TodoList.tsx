import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodo';

export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo />
      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};
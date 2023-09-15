import React, { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.scss';
import { ITodo, TDisplayStatus } from './types/common.types';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { DisplayButtons } from './components/DisplayButtons';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [displayStatus, setDisplayStatus] = useState<TDisplayStatus>('all');

  const handleAddTodo = useCallback((text: string) => {
    const newTodo = {
      id: uuid(),
      text,
      completed: false,
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }, [todos]);

  const handleTodoToggle = useCallback((id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }, [todos]);

  const handleDisplayStatusChange = useCallback((status: TDisplayStatus) => {
    setDisplayStatus(status);
  }, []);

  return (
    <div className='container'>
      <Header />
      <Input onClick={handleAddTodo} />
      <DisplayButtons displayStatus={displayStatus} onStatusChange={handleDisplayStatusChange} />
      <TodoList todos={todos} onTodoToggle={handleTodoToggle} displayStatus={displayStatus} />
    </div>
  );
}

export default App;

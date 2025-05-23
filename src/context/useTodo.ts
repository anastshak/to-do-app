import { useContext } from 'react';
import { TodoContext } from './TodoContext';

export const useTodo = () => {
  //access the TodoContext and use its value
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }

  return context;
};

import React, { useState, useRef, useEffect } from 'react';
import { Input } from '../Input/Input';
import { useTodo } from '../../context/useTodo';
import toast from 'react-hot-toast';

import styles from './AddTodo.module.scss';

//input + button
export const AddTodo = () => {
  const [input, setInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodo();

  useEffect(() => {
    //focus on input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
      toast.success('Todo added successfully!');
    } else {
      toast.error('Todo field cannot be empty!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.itemBlock}>
        <Input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="start typing ..."
        />
        <button type="submit" className={styles.btn}>
          add
        </button>
      </div>
    </form>
  );
};

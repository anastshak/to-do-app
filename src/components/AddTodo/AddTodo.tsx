import React, { useState, useRef, useEffect } from 'react';
import styles from './AddTodo.module.scss';
import { Input } from '../Input/Input';

//input + button
export const AddTodo = () => {
  const [input, setInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    //focus on input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submit!');
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

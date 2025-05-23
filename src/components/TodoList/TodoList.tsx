import { useTodo } from '../../context/useTodo';
import { SiStarship } from 'react-icons/si';

import styles from './TodoList.module.scss';

export const TodoList = () => {
  const { todos } = useTodo();

  if (!todos.length) {
    return (
      <div className={styles.msgBox}>
        <SiStarship className={styles.icon} />
        You have nothing to do!
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

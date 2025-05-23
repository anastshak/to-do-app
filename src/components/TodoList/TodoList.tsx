import { useTodo } from '../../context/useTodo';
import { SiStarship } from 'react-icons/si';
import { motion } from 'framer-motion';
import { TodoItem } from '../TodoItem/TodoItem';

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
    <motion.ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </motion.ul>
  );
};

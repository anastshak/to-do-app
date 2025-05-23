import { motion } from 'framer-motion';
import { Todo } from '../../context/TodoContext';
import cn from 'classnames';

import styles from './TodoItem.module.scss';

export const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props;

  return (
    <motion.li
      layout
      className={cn(styles.item, todo.status === 'completed' && styles.itemCompleted)}
    >
      <motion.span
        layout
        className={todo.status === 'completed' ? styles.itemCompleted : styles.itemUndone}
      >
        {todo.text}
      </motion.span>
    </motion.li>
  );
};

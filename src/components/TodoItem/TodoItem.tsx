import { useEffect, useRef, useState } from 'react';
import { useTodo } from '../../context/useTodo';
import toast from 'react-hot-toast';
import { Input } from '../Input/Input';
import { BsCheck2Square } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Todo } from '../../context/TodoContext';
import cn from 'classnames';

import styles from './TodoItem.module.scss';

export const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [editingTodoText, setEditingTodoText] = useState<string>('');
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const { deleteTodo, editTodo, updateTodoStatus } = useTodo();
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingTodoId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingTodoId]);

  const handleEdit = (todoId: string, todoText: string) => {
    setEditingTodoId(todoId);
    setEditingTodoText(todoText);

    if (editInputRef.current) {
      editInputRef.current.focus();
    }
  };

  const handleUpdate = (todoId: string) => {
    if (editingTodoText.trim() !== '') {
      editTodo(todoId, editingTodoText);
      setEditingTodoId(null);
      setEditingTodoText('');
      toast.success('Todo updated successfully!');
    } else {
      toast.error('Todo field cannot be empty!');
    }
  };

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId);
    toast.success('Todo deleted successfully!');
  };

  const handleStatusUpdate = (todoId: string) => {
    updateTodoStatus(todoId);
    toast.success('Todo status updated successfully!');
  };

  return (
    <motion.li
      layout
      className={cn(styles.itemWrapper, todo.status === 'completed' && styles.itemCompleted)}
    >
      {editingTodoId === todo.id ? (
        <motion.div layout className={styles.itemUpdateMode}>
          <Input
            ref={editInputRef}
            type="text"
            value={editingTodoText}
            onChange={(e) => setEditingTodoText(e.target.value)}
          />
          <button className={styles.btnUpdate} onClick={() => handleUpdate(todo.id)}>
            Update
          </button>
        </motion.div>
      ) : (
        <div className={styles.item}>
          <motion.span
            layout
            className={todo.status === 'completed' ? styles.itemCompleted : styles.itemUndone}
          >
            {todo.text}
          </motion.span>
          <div className={styles.controlBox}>
            <button onClick={() => handleStatusUpdate(todo.id)}>
              {todo.status === 'undone' ? (
                <span className={styles.mark}>
                  <BsCheck2Square />
                  Mark Completed
                </span>
              ) : (
                <span className={styles.mark}>
                  <TbRefresh />
                  Mark Undone
                </span>
              )}
            </button>
            <div className={styles.controlButtons}>
              <button onClick={() => handleEdit(todo.id, todo.text)} className={styles.editBtn}>
                <FaRegEdit />
                Edit
              </button>
              <button onClick={() => handleDelete(todo.id)} className={styles.deleteBtn}>
                <RiDeleteBin7Line />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.li>
  );
};

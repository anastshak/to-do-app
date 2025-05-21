import { Toaster } from 'react-hot-toast';
import styles from './Home.module.scss';
import { TodoList } from '../../components/TodoList/TodoList';
import { AddTodo } from '../../components/AddTodo/AddTodo';

export const Home = () => {
  return (
    <>
      <h1 className={styles.text}>to-do list</h1>
      <Toaster position="bottom-center" />
      <AddTodo />
      <TodoList />
    </>
  );
};

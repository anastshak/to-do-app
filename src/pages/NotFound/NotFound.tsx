import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Page not found</h2>
      <Link to="/" className={styles.link}>
        Go home
      </Link>
    </div>
  );
};

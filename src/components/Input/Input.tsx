import { InputHTMLAttributes, forwardRef } from 'react';

import styles from './Input.module.scss';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ ...rest }, ref) => {
    return <input {...rest} ref={ref} className={styles.input} />;
  },
);

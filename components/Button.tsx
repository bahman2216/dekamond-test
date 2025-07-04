import styles from '../styles/Button.module.scss';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button className={styles.button} {...props}>{children}</button>
);

export default Button;

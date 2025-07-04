
"use client";
import styles from '../styles/Input.module.scss';
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className={styles.inputWrapper}>
    {label && <label className={styles.label}>{label}</label>}
    <input className={styles.input} {...props} />
  </div>
);

export default Input;

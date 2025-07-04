"use client";
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import styles from '../styles/AuthPage.module.scss';
import { useRouter } from 'next/navigation';

const iranPhoneRegex = /^(\+98|0)?9\d{9}$/;

const AuthPage: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!iranPhoneRegex.test(phone)) {
      setError('Mobile is not valid!');
      return;
    }
    setError('');
    const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
    const data = await res.json();
    if (data.results && data.results[0]) {
      localStorage.setItem('user', JSON.stringify(data.results[0]));
      router.push('/dashboard');
    }
  };

  return (
    <div className={styles.authContainer}>
      <h2>Login</h2>
      <Input
        label="Mobile"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Example: 09133456789"
        maxLength={11}
      />
      {error && <div className={styles.error}>{error}</div>}
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default AuthPage;

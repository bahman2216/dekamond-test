"use client";
import React, { useEffect, useState } from 'react';
import styles from '../styles/DashboardPage.module.scss';
import { useRouter } from 'next/navigation';

const DashboardPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.replace('/auth');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className={styles.dashboardContainer}>
      <h2>Dashboard</h2>
      <h3>Welcome to the Dashboard</h3>
      <a
        href="#"
        onClick={() => {
          localStorage.removeItem('user');
          router.replace('/auth');
        }}
        className={styles.logoutLink}
        style={{ marginBottom: 16, display: 'inline-block', color: 'red' }}
      >
        Logout
      </a>
      <div className={styles.userInfo}>
        <img src={user.picture.large} alt="User" />
        <div>
          <div>Name: {user.name.first} {user.name.last}</div>
          <div>E-mail: {user.email}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

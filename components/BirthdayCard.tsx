'use client'

import React, { useState } from 'react';
import styles from './BirthdayCard.module.css';

const BirthdayCard = () => {
  const [wish, setWish] = useState('');
  const [name, setName] = useState('');

  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <h1>Happy Birthday!</h1>
        <p>Wishing you a day filled with joy and laughter!</p>
      </div>
      <div className={styles.inputArea}>
        <textarea
          className={styles.wishInput}
          placeholder="Write your birthday wish here..."
          value={wish}
          onChange={(e) => setWish(e.target.value)}
        />
        <input
          className={styles.nameInput}
          type="text"
          placeholder="From: ____________"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BirthdayCard;
// BirthdayChatbox.tsx
'use client';

import React, { useState } from 'react';
import styles from './BirthdayChatbox.module.css';
import emailjs from 'emailjs-com';

interface Message {
  name: string;
  wish: string;
}

export default function BirthdayChatbox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [wish, setWish] = useState('');
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const handleSend = () => {
    if (!wish.trim() || !name.trim()) return;

    const newMessage = { name, wish };
    setMessages((prev) => [...prev, newMessage]);
    sendEmail(wish, name);
    setWish('');
    setName('');
  };

  const sendEmail = (wish: string, name: string) => {
    const templateParams = {
      name: name || 'Anonymous',
      message: wish,
      to_email: ['ayusoye@gmail.com', 'olanikeblossom@gmail.com'],
    };

    emailjs
      .send(
        'service_76oxuzw',
        'template_nscwdv7',
        templateParams,
        'DD3pTD6kq1mdXALcR'
      )
      .then(() => {
        alert('Wish sent 🎉');
      })
      .catch(() => {
        alert('Something went wrong sending your wish.');
      });
  };

  return (
    <div className={`${styles.chatWidget} ${open ? styles.open : ''}`}>
      <button
        className={`${styles.toggleBtn} sm:px-4 sm:py-2 sm:rounded-full sm:text-sm`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? '🧁 Close' : '🎉 Wish'}
      </button>

      {open && (
        <div className={styles.chatbox}>
          <h2 className={styles.title}>🎈 Drop a Wish 🎈</h2>

          <div className={styles.messages}>
            {messages.map((msg, idx) => (
              <div key={idx} className={styles.message}>
                <p className={styles.wishText}>“{msg.wish}”</p>
                <p className={styles.name}>— {msg.name}</p>
              </div>
            ))}
          </div>

          <input
            className={styles.input}
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            className={styles.textarea}
            placeholder="Type your birthday wish..."
            rows={3}
            value={wish}
            onChange={(e) => setWish(e.target.value)}
          />

          <button className={styles.sendBtn} onClick={handleSend}>
            Send Wish 💌
          </button>
        </div>
      )}
    </div>
  );
}

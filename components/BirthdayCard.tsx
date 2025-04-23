"use client";

import React, { useState, ChangeEvent } from "react";
import styles from "./BirthdayCard.module.css";
import emailjs from "emailjs-com";

const sendEmail = (wish: string, name: string) => {
  const templateParams = {
    from_name: name || "Anonymous",
    message: wish,
  };

  emailjs
    .send(
      "service_76oxuzw", 
      "template_nscwdv7",
      templateParams,
      "DD3pTD6kq1mdXALcR"
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Your birthday wish has been sent 🎉");
    })
    .catch((err) => {
      console.error("FAILED...", err);
      alert("Oops, something went wrong sending the wish.");
    });
};

const BirthdayCard = () => {
  const [wish, setWish] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleWishChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setWish(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const toggleFlip = (): void => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className={`${styles.cardContainer} p-4 h-screen`}>
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
        {/* Front of Card */}
        <div className={`${styles.cardFace} ${styles.front}`}>
          <h1 className="text-3xl font-bold">🎂 Happy Birthday! 🎂</h1>
          <p className="mt-2">Click to write a message!</p>
          <button
            onClick={toggleFlip}
            className="mt-6 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700"
          >
            Open Card
          </button>
        </div>

        {/* Back of Card */}
        <div className={`${styles.cardFace} ${styles.back}`}>
          <div className={styles.inputArea}>
            <textarea
              placeholder="Write your birthday wish..."
              value={wish}
              onChange={handleWishChange}
              rows={3}
            />
            <input
              type="text"
              placeholder="From: __________"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className={styles.preview}>
            {wish && <p>"{wish}"</p>}
            {name && <p>— {name}</p>}
          </div>
          <button
            onClick={() => sendEmail(wish, name)}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
          >
            Send Wish 🎁
          </button>
          <button
            onClick={toggleFlip}
            className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700"
          >
            Close Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;

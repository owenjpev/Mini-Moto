"use client";

import React, { useState } from "react";

export default function SloveneTestPage() {
  const words = [
    { sl: "in", en: "and" },
    { sl: "ali", en: "or" },
    { sl: "pa", en: "and / but / then" },
    { sl: "ampak", en: "but" },
    { sl: "tudi", en: "also / too" },
    { sl: "že", en: "already / yet" },
    { sl: "še", en: "still / more" },
    { sl: "ne", en: "not" },
    { sl: "ja", en: "yes" },
    { sl: "ne", en: "no" },
    { sl: "ta", en: "this" },
    { sl: "tisti", en: "that" },
    { sl: "to", en: "it / this" },
    { sl: "tale", en: "this one" },
    { sl: "oni/one", en: "those" },
    { sl: "jaz", en: "I" },
    { sl: "ti", en: "you (singular, informal)" },
    { sl: "vi", en: "you (plural or formal)" },
    { sl: "on", en: "he" },
    { sl: "ona", en: "she" },
    { sl: "ono", en: "it" },
    { sl: "mi", en: "we" },
    { sl: "oni", en: "they (masc.)" },
    { sl: "one", en: "they (fem.)" },
    { sl: "to", en: "it / that" },
  ];

  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<null | string>(null);
  const [score, setScore] = useState(0);

  const current = words[index];

  const checkAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = current.en.toLowerCase();
    const guess = input.trim().toLowerCase();

    if (correct.includes(guess) && guess.length > 0) {
      setFeedback("✅ Correct!");
      setScore((s) => s + 1);
    } else {
      setFeedback(`❌ ${current.en}`);
    }

    setTimeout(() => {
      setInput("");
      setFeedback(null);
      setIndex((i) => (i + 1) % words.length);
    }, 1500);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Slovene Test</h1>

        <div style={styles.wordBox}>
          <span style={styles.word}>{current.sl}</span>
        </div>

        <form onSubmit={checkAnswer} style={styles.form}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type English meaning"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Check
          </button>
        </form>

        {feedback && <p style={styles.feedback}>{feedback}</p>}

        <div style={styles.footer}>
          <p>Score: {score} / {words.length}</p>
          <p>Word {index + 1} / {words.length}</p>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f9fafb, #e5e7eb)",
    fontFamily: "sans-serif",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    padding: "40px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#111827",
  },
  wordBox: {
    background: "#f3f4f6",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "20px",
  },
  word: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2563eb",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    outline: "none",
  },
  button: {
    padding: "12px 18px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  feedback: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  footer: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#6b7280",
  },
};

"use client";

import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Please sign in to your account</p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className={styles.btn}>
            Sign In
          </button>
        </form>

        <div className={styles.footer}>
          Don't have an account?{" "}
          <Link href="/register" className={styles.link}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

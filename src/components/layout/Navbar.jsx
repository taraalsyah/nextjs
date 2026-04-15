import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        MyApp
      </Link>

      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/login" className={styles.loginBtn}>
          Login
        </Link>
      </div>
    </nav>
  );
}
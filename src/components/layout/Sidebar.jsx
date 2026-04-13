"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [mobile, setMobile] = useState(false);

  // 🔥 load state dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem("sidebar");
    if (saved !== null) {
      setOpen(saved === "true");
    }
  }, []);

  // 🔥 simpan state
  useEffect(() => {
    localStorage.setItem("sidebar", open);
  }, [open]);

  // 🔥 detect mobile
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <>
      {/* 🔥 hamburger (mobile only) */}
      {mobile && (
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      )}

      <aside
        className={`${styles.sidebar} ${
          open ? styles.open : styles.closed
        } ${mobile ? styles.mobile : ""}`}
      >
        {/* toggle desktop */}
        {!mobile && (
          <button
            className={styles.toggle}
            onClick={() => setOpen(!open)}
          >
            {open ? "←" : "→"}
          </button>
        )}

        <ul className={styles.menu}>
          {menu.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className={styles.link}>
                {open ? item.name : item.name[0]}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
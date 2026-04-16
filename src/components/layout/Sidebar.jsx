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

  const getIcon = (name) => {
    switch (name) {
      case "Home":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case "Blog":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        );
      case "Dashboard":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
          </svg>
        );
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  return (
    <>
      {/* 🔥 hamburger (mobile only) */}
      {mobile && (
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
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
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            )}
          </button>
        )}

        <ul className={styles.menu}>
          {menu.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className={styles.link} data-tooltip={!open ? item.name : undefined}>
                <span className={styles.icon}>{getIcon(item.name)}</span>
                {open && <span className={styles.text}>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
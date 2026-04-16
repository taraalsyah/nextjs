"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  
  // Halaman otentikasi di mana Sidebar dan Navbar akan disembunyikan
  const isAuthPage = pathname?.startsWith("/login") || pathname?.startsWith("/register");

  if (isAuthPage) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />

        <main style={{ flex: 1, padding: "20px" }}>
          {children}
        </main>
      </div>
    </>
  );
}

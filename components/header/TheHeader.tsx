import Link from "next/link";
import React from "react";
import styles from "./TheHeader.module.css";
import { Navigation } from "../Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const TheHeader = () => {
  return (
    <header className={styles.root}>
      <Navigation navLinks={navItems} />
    </header>
  );
};

export default TheHeader;

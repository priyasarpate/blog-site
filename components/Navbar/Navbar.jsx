import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css"

function Navbar() {
  return (
    <div>
      <div className={styles.navbar_container}>
        {/* <p>🌟Gunpriya&nbsp;</p> */}
        <div className={styles.navbar}>
          <Link href="/">
            <div>Gunpriya</div>
          </Link>
          <Link href="/blog">
            <small className={styles.item}>Blog</small>
          </Link>
          <Link href="/projects">
            <small className={styles.item}>Projects</small>
          </Link>
          <Link href="/projects">
            <small className={styles.item}>contacts</small>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

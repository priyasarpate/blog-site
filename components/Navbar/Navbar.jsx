import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div>
        {/* <p>🌟Gunpriya&nbsp;</p> */}
        <div>
          <Link href="/">
            <small>Gunpriya</small>
          </Link>
          <Link href="/blog">
            <small>Blog</small>
          </Link>
          <Link href="/projects">
            <small>Projects</small>
          </Link>
          <Link href="/projects">
            <small>contacts</small>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

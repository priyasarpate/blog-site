import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div>
        <nav class="flex px-4 items-center relative">
          <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
            <li>
              <Link
                href="/"
                class="flex md:inline-flex p-1 items-center hover:bg-gray-50 mt-4"
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                class="flex md:inline-flex p-1 items-center hover:bg-gray-50 mt-4"
              >
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                class="flex md:inline-flex p-1 items-center hover:bg-gray-50 mt-4"
              >
                <span>Blogs</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("yellow");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("blue");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div className="pl-20 pr-20 left-0 top-0 w-full z-10 ease-in duration-300 bg-bg_color">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="text-2xl text-black">Rezumers</h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/work">
              <button class="border-2 border-light-blue text-dark-blue rounded-2xl py-1 px-5 hover:bg-dark-blue hover:text-white hover:border-dark-blue">
                all
              </button>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/contact">
              <button class="border-2 border-light-blue text-dark-blue rounded-2xl py-1 px-5  hover:bg-dark-blue hover:text-white hover:border-dark-blue">
                case study
              </button>
            </Link>
          </li>

          <li className="p-4">
            <Link href="/contact">
              <button class="border-2 border-light-blue text-dark-blue rounded-2xl py-1 px-5  hover:bg-dark-blue hover:text-white hover:border-dark-blue">
                case study
              </button>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/contact">
              <button class="border-2 border-light-blue text-dark-blue rounded-2xl py-1 px-5  hover:bg-dark-blue hover:text-white hover:border-dark-blue">
                case study
              </button>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/contact">
              <button class="border-2 border-light-blue text-dark-blue rounded-2xl py-1 px-5  hover:bg-dark-blue hover:text-white hover:border-dark-blue">
                case study
              </button>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/contact">
              <button class="border-2 border-light-blue text-dark-blue rounded-2xl py-1 px-5  hover:bg-dark-blue hover:text-white hover:border-dark-blue">
                case study
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Try for free</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Login</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

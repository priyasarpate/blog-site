import React from "react";
import { FaBlogger } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import Link from "next/link";
import { AiOutlineMail, AiOutlineDribbble } from "react-icons/ai";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import avatar from "../../public/avatar.jpg";

function About() {
  return (
    <div class="-mx-3 md:flex md:m-auto justify-center">
      <div class="px-3 md:w-1/2">
        {/* Cards */}
        <div class="w-full mx-auto rounded-lg bg-white p-5 mt-24">
          <div class="w-full flex mb-4 items-center">
            <div class="flex justify-center items-center overflow-hidden rounded-full w-20 h-20 bg-gray-50 border-4 border-light-blue">
              <Image src={avatar} alt="" width={150} height={150} />
            </div>
            <div class="flex-grow pl-3 m-4 gap-3">
              <h6 class="font-bold text-4xl text-gray-600 text-dark-blue">
                Gunpriya✨
              </h6>
              <div class="text-lg p-2 text-dark-blue text-opacity-50">
                Front-end developer
                <div class="flex gap-1">
                  <a href="https://github.com/priyasarpate" target="_blank">
                    <FiGithub class="h-4 w-4 hover:text-dark-blue cursor-pointer" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/priyasarpate/"
                    target="_blank"
                  >
                    <FiLinkedin class=" h-4 w-4 hover:text-dark-blue cursor-pointer" />
                  </a>
                  <a href="https://twitter.com/priyasarpate" target="_blank">
                    <FiTwitter class=" h-4 w-4 hover:text-dark-blue cursor-pointer" />
                  </a>
                  <a href="https://dribbble.com/Gunpriya" target="_blank">
                    <AiOutlineDribbble class=" h-4 w-4 hover:text-dark-blue cursor-pointer" />
                  </a>
                  <a href="mailto:" target="_blank">
                    <AiOutlineMail class=" h-4 w-4 hover:text-dark-blue cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <p class="leading-7 text-xl text-blue">
              Welcome to my digital garden where I share what Im learning about
              shipping great products, becoming a better developer and growing a
              career in tech.
            </p>
          </div>
          <div class="flex items-center py-5 gap-3 font-normal mt-5">
            <Link href="/projects">
              <button class="bg-orange bg-opacity-25 flex items-center border-0 py-2 px-10 rounded-md border-light-blue text-dark-blue">
                <AiFillAppstore />
                Projects
              </button>
            </Link>
            <Link href="/blog">
              <button class="bg-light-blue bg-opacity-25  flex items-center border-0 py-2 px-10 rounded-md border-light-blue text-dark-blue">
                <FaBlogger />
                Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

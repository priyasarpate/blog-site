import React from "react";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiOutlineMail,
  } from "react-icons/ai";
  import { GrProjects } from "react-icons/gr";
  

function Footer() {
  return (
    <div class="">
      <div class="flex items-center justify-center p-0 m-0">
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiOutlineMail />
          </div>
      <section class="bg-white">
          <p class="m-6 text-xs leading-6 text-center text-gray">
            ©2023 Gunpriya Sarpate, All rights reserved.
          </p>
      </section>
    </div>
  );
}

export default Footer;

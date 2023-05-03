import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter,FiGithub,FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div class="">
      <div class="flex justify-center p-0 m-0 gap-1 mt-20">
        <FiGithub class=" h-5 w-5" />
        <FiTwitter class=" h-5 w-5" />
        <FiLinkedin class=" h-5 w-5" />
        <AiOutlineMail class=" h-5 w-5" />
      </div>
      {/* <section class="bg-white">
        <p class="m-6 text-xs leading-6 text-center text-gray">
          ©2023 Gunpriya Sarpate, All rights reserved.
        </p>
      </section> */}
    </div>
  );
}

export default Footer;

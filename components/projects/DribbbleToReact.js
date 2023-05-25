import React from "react";
import { dribbletoreacts } from "./data";
import { AiOutlineDribbble } from "react-icons/ai";
import { IoBrowsers } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

function DribbleToReact() {
  return (
    <main class="w-screen py-6 bg-yellow-50 flex items-center justify-center flex-wrap">
      {dribbletoreacts.map((dribbletoreact) => (
        <div
          class="bg-white w-96 h-72 shadow-md rounded m-3 overflow-hidden"
          key={dribbletoreact.id}
        >
          <div class="h-3/4 w-full overflow-hidden">
            <Image
              alt=""
              src={dribbletoreact.img}
              width={100}
              height={100}
              class="h-56 w-full"
            />
          </div>
          <div class="w-full h-16 p-3 flex justify-between">
            <a href="#" class=" hover:text-yellow-600 text-gray-700">
              <span class="text-lg font-semibold uppercase">
                {dribbletoreact.title}
              </span>
            </a>
            <div class="flex">
              <a href={dribbletoreact.github} target="_blank">
                <FiGithub class="h-5 w-5 text-dark-blue hover:text-dark-blue cursor-pointer" />
              </a>
              <a href={dribbletoreact.url} target="_blank">
                <AiOutlineDribbble class="h-6 w-6 text-right text-dribble cursor-pointer hover:text-dark-blue " />
              </a>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default DribbleToReact;

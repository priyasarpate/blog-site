import React from "react";
import { dribbletoreacts, smallprojects } from "./data";
import { AiOutlineDribbble } from "react-icons/ai";
import Image from "next/image";

function SmallProjects() {
  return (
    <main class="w-screen py-6 bg-yellow-50 flex items-center justify-center flex-wrap">
      {smallprojects.map((SmallProject) => (
        <div
          class="bg-white w-72 h-72 shadow-md rounded m-3 overflow-hidden"
          key={SmallProject.id}
        >
          <div class="h-3/4 w-full overflow-hidden">
            <Image
              alt=""
              src={SmallProject.img}
              width={100}
              height={100}
              class="h-56 w-full"
            />
          </div>
          <div class="w-full h-16 p-3 flex justify-between">
            <a href="#" class=" hover:text-yellow-600 text-gray-700">
              <span class="text-lg font-semibold uppercase">
                {SmallProject.title}
              </span>
            </a>
            <div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default SmallProjects;

import React from "react";
import { uiconcepts } from "./data";
import { AiOutlineDribbble } from "react-icons/ai";
import Image from "next/image";

function UIConcepts() {
  return (
    <main class="w-screen py-6 bg-yellow-50 flex items-center justify-center flex-wrap">
      {uiconcepts.map((uiconcept) => (
        <div
          class="bg-white w-72 h-72 shadow-md rounded m-3 overflow-hidden"
          key={uiconcept.id}
        >
          <div class="h-3/4 w-full overflow-hidden">
            <Image
              alt=""
              src={uiconcept.img}
              width={100}
              height={100}
              class="h-56 w-full"
            />
          </div>
          <div class="w-full h-16 p-3 flex justify-between">
            <a href="#" class=" hover:text-yellow-600 text-gray-700">
              <span class="text-lg font-semibold uppercase">
                {uiconcept.title}
              </span>
            </a>
            <div>
              <a href={uiconcept.url} target="_blank">
                <AiOutlineDribbble class="h-6 w-6 text-right text-dribble cursor-pointer hover:text-dark-blue "/>
              </a>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default UIConcepts;

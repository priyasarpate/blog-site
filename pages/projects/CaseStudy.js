import React from "react";
import Image from "next/image";
import casestudy from "../../public/img/casestudy.jpg";

function CaseStudy() {
  return (
    <div>
      {/* min-h-screen  */}
      <div class="flex justify-center items-center font-mono mt-11 shadow-2xl">
        <div class="shadow-2xl">
          <div class="md:flex px-4 max-w-4xl shadow-2xl">
            <div class="flex-none">
              <Image
                alt="pic"
                src={casestudy}
                class=" h-80 w-56 rounded-md transform -translate-y-4 border-4 border-gray-300"
              />
            </div>

            <div class="flex-col text-gray-300">
              <p class="px-4 text-2xl font-bold py-6 text-dark-blue">
                🪄Beautify
              </p>
              <hr class="hr-text text-gray" data-content=""></hr>
              <div class="text-md flex justify-between px-4 py-4 my-2 ">
                <span class="font-bold overflow-hidden text-dark-blue">
                  Skin Care Recommendation App
                </span>
                <span class="font-bold"></span>
              </div>
              <p class="hidden md:block px-4 my-4 text-sm text-left">
                n publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be
              </p>
              <div class="text-xs">
                <button
                  type="button"
                  class=" bg-orange bg-opacity-25 text-dark-blue rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  Read
                </button>

                <a
                  href="https://www.figma.com/file/i8r0WGSTu6feu6VdV2EZ9g/Beautify?type=design&node-id=0-1&t=tQp4lM1kqIlFVWrI-0"
                  target="_blank"
                  class=" hover:text-yellow-600 text-gray-700"
                >
                  <button
                    type="button"
                    class="text-dark-blue bg-light-blue bg-opacity-25  rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    Figma
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center px-4 mb-0 w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;

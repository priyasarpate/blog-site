import React from "react";

function CaseStudy() {
  return (
    <div>
      {/* min-h-screen  */}
      <div class="grid place-items-center font-mono">
        <div class="bg-white rounded-md shadow-lg">
          <div class="md:flex px-4 leading-none max-w-4xl">
            <div class="flex-none ">
              <img
                src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
                alt="pic"
                class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
              />
            </div>

            <div class="flex-col text-gray-300">
              <p class="px-4 text-2xl font-bold py-6">🪄Beatify</p>
              <hr class="hr-text text-gray" data-content=""></hr>
              <div class="text-md flex justify-between px-4 py-4 my-2 ">
                <span class="font-bold overflow-hidden	">
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
                  class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  Read
                </button>

                <button
                  type="button"
                  class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  Figma
                </button>
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

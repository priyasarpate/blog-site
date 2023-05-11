import React from "react";

function MainProjects() {
  return (
    <main class="w-screen py-6 bg-yellow-50 flex items-center justify-center flex-wrap bg-aliceblue">
      <div class="bg-white w-96 h-72 shadow-md rounded-2xl m-3  overflow-hidden	">
        <div class="py-8 px-4">
          <div class="">
            <span class="text-lg font-semibold uppercase tracking-wide ">
              Pineapple
            </span>
            <p class="text-gray-600 text-sm leading-5 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div class="">
            <buttion
              type="button"
              class="border border-gray text-gray rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
            >
              Live
            </buttion>
            <buttion
              type="button"
              class="border border-gray text-gray rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
            >
              Live
            </buttion>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainProjects;

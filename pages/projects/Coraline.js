import React from "react";

function Coraline() {
  return (
    <div>
      {/* min-h-screen  */}
      <div class="h-screen grid place-items-center font-mono bg-aliceblue">
        <div class="bg-white rounded-md bg-gray-800 shadow-lg">
          <div class="md:flex px-4 leading-none max-w-4xl">
            <div class="flex-none ">
              <img
                src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
                alt="pic"
                class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
              />
            </div>

            <div class="flex-col text-gray-300">
              <p class="px-4 text-2xl font-bold py-6">Joker (2020)</p>
              <hr class="hr-text text-gray" data-content=""></hr>
              <div class="text-md flex justify-between px-4 my-2">
                <span class="font-bold">2h 2min | Crime, Drama, Thriller</span>
                <span class="font-bold"></span>
              </div>
              <p class="hidden md:block px-4 my-4 text-sm text-left">
                In Gotham City, mentally troubled comedian Arthur Fleck is
                disregarded and mistreated by society. He then embarks on a
                downward spiral of revolution and bloody crime. This path brings
                him face-to-face with his alter-ego: the Joker.{" "}
              </p>
              <div class="text-xs">
                <button
                  type="button"
                  class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  Code
                </button>

                <button
                  type="button"
                  class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  Live
                </button>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center px-4 mb-4 w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Coraline;

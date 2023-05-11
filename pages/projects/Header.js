import React from "react";

function Header() {
  return (
    <div>
      <div class="flex gap-5 m-10 items-center justify-center">
        <button class="border-2 border-light-blue text-dark-blue rounded-2xl py-1 px-5 hover:bg-dark-blue hover:text-white hover:border-dark-blue">
          all
        </button>
        <button class="border-2 border-light-blue text-dark-blue rounded-2xl py-1 px-5  hover:bg-dark-blue hover:text-white hover:border-dark-blue">
          Case Study
        </button>
        <button class="border-2 border-light-blue text-dark-blue rounded-2xl py-1 px-5  hover:bg-dark-blue hover:text-white hover:border-dark-blue">
          projects
        </button>
        <button class="border-2 border-light-blue text-dark-blue rounded-2xl py-1 px-5  hover:bg-dark-blue hover:text-white hover:border-dark-blue">
          Concepts
        </button>
        <button class="border-2 border-light-blue text-dark-blue rounded-2xl py-1 px-5  hover:bg-dark-blue hover:text-white hover:border-dark-blue">
          dribbble into React
        </button>
        <button class="border-2 border-light-blue text-dark-blue rounded-2xl py-1 px-5  hover:bg-dark-blue hover:text-white hover:border-dark-blue">
          Small Projects
        </button>
      </div>
    </div>
  );
}

export default Header;

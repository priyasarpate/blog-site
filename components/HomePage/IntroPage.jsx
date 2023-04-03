import React from "react";

function About() {
  return (
    <div class="-mx-3 md:flex md:m-auto items-center justify-center h-screen">
      <div class="px-3 md:w-1/2">
        {/* Cards */}
        <div class="w-full mx-auto rounded-lg bg-white p-5 mb-6">
          <div class="w-full flex mb-4 items-center">
            <div class="overflow-hidden rounded-full w-24 h-24 bg-gray-50 border-4 border-main-color">
              <img src="https://i.pravatar.cc/100?img=1" alt="" />
            </div>
            <div class="flex-grow pl-3 m-4">
              <h6 class="font-bold text-4xl text-gray-600">Gunpriya✨</h6>
              <p class="text-lg text-gray p-2 ">Front-end developer</p>
            </div>
          </div>
          <div class="w-full">
            <p class="leading-7">
              <span class=" text-xl text-gray mr-1 font-normal"></span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt
              ratione dolor exercitationem minima quas itaque saepe quasi
              architecto vel! Accusantium, vero sint recusandae cum tempora nemo
              commodi soluta deleniti. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quos sunt ratione dolor exercitationem minima
              quas itaque saepe quasi architecto vel! Accusantium, vero sint
              recusandae cum tempora nemo commodi soluta deleniti.
            </p>
          </div>
        </div>
        {/* card end  */}
      </div>
    </div>
  );
}

export default About;

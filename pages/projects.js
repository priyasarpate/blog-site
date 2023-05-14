import React from "react";
import CaseStudy from "./projects/CaseStudy";
import Header from "./projects/Header";
import SmallProjects from "./projects/SmallProjects";
import DribbleToReact from "./projects/DribbbleToReact";
import UIConcepts from "./projects/UIConcepts";
import ReactWork from "./projects/ReactWork";
import Top from "./projects/Top";
function projects() {
  return (
    <>
      <div class="bg-white">
        <Header />
        <CaseStudy />
        <ReactWork />
        <SmallProjects />
        <DribbleToReact />
        <UIConcepts />
      </div>
    </>
  );
}

export default projects;

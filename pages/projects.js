import React from "react";

import CaseStudy from "../components/projects/CaseStudy";
import Header from "../components/projects/Header";

import SmallProjects from "../components/projects/SmallProjects";
import DribbleToReact from "../components/projects/DribbbleToReact";
import UIConcepts from "../components/projects/UIConcepts";
import ReactWork from "../components/projects/ReactWork";

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

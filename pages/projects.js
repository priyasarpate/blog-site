import React from "react";
import CaseStudy from "./projects/CaseStudy";
import Header from "./projects/Header";
import SmallProjects from "./projects/SmallProjects";
import MainProjects from "./projects/MainProjects";
import ReactProjects from "./projects/ReactProjects";
import DribbleToReact from "./projects/DribbbleToReact";
import UIConcepts from "./projects/UIConcepts";

function projects() {
  return (
    <>
    <div class="bg-aliceblue">
      <Header />
      <CaseStudy />
      <ReactProjects />
      <SmallProjects />
      <DribbleToReact />
      <UIConcepts />
      </div>
    </>
  );
}

export default projects;

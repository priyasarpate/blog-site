import React from "react";
import Coraline from "./projects/Coraline";
import Header from "./projects/Header";
import ReactWork from "./projects/ReactWork";
import MainProjects from "./projects/MainProjects";
import Trial from "./projects/Trial";


function projects() {
  return (
    <>
    <Header />
    <Trial />
     {/* <Coraline /> */}
     <MainProjects />
     <ReactWork />
    </>
  );
}

export default projects;
